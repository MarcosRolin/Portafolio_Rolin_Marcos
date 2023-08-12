import React from 'react'
import './Section.css';



const Section = () => {
return (
  <div className='estudios'>
    <h2 className='texto-global'>Educación</h2>
    <div className="education-item">
      <h3>Técnicatura en Informática Profesional y Personal</h3>
      <p>Escuela Tecnica Amalia del Valle Herrera de Aguirre - Año de finalización 2018</p>
    </div>
    <div className="education-item">
      <h3>Diplomatura en Programación Web Full Stack Developer</h3>
      <p>Universidad Tecnologina Nacional UTN - Año de finalización 2022</p>
    </div>
    <div className="education-item">
      <h3>Curso de Python</h3>
      <p>Universidad Tecnologina Nacional UTN - Año de finalización 2022</p>
    </div>
    <div className="education-item">
      <h3>Estudiante de Ingenieria en Sistemas</h3>
      <p>UDEMM - 03 de 53 materias</p>
    </div>
  </div>
);
};


export {Section};