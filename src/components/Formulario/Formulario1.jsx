import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Formulario.css';

const Formulario = () => {

const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0w5e6qg', 'template_wsy6u6f', form.current, '5uegvQPPvFf57EZke')
    .then((result) => {
        console.log(result.text);
        alert('Mensaje Enviado');
    }, (error) => {
        console.log(error.text);
    });
};

return (
<div className='formulario-container'>
    <div className='container-form'>
        <div className='container-title'>
        <h2 className='title1'>FORMULARIO</h2>
        </div>
         <div className='form-box'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='nombre-coreo'>
                <div className='input-box'>
                    <input type='text' name='nombre' id='nombre' required placeholder='Nombre' />
                    <label>Nombre </label>
                </div>
                <div className='input-box'>
                    <input type='text' name='correo' id='correo' required placeholder='Correo@gmail.com' />
                    <label>Correo </label>
                </div>
                </div>

                <div className='select-container'>
                    <label>En que podemos ayudarte..? </label>
                    <select name='opcion' id='opcion' required placeholder='Seleccione una opcion'>
                        <option value='Diseño de Pagina web'>Diseño de Pagina Web</option>
                        <option value='Propuesta de trabajo'>Propuesta de Trabajo</option>
                        <option value='Otro'>Otro</option>
                    </select>
                </div>

                <div className='container-textarea'>
                <label className='text-textarea'>
                    Descripción:
                    <textarea name='comentario' id='comentario' placeholder='DETALLA TU CONSULTA' style={{ width: '100%', height: '100%', resize: 'none' }}/>
                 </label>
                </div>

                <div className='container-boton'>
                <input type='submit' id='button' className='boton-enviar' value='Enviar' />
                </div>
            </form>
        </div>
        </div>
    </div>

);
};
export {Formulario};