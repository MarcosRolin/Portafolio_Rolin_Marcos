import './HomePage.css'
import perfil from '../images/perfil9.png'


const HomePage = () => {

return (
<div className='home-page'>
    <div className='conteiner-presentasion'>
        <div className='presentasion'>
            <h1 className='home-text bienvenida'>!Bienvenido a mi portafolio¡</h1>
            <h2 className='home-text puesto'>Me llamo Marcos Rolin Programador Web Full Stack Developer </h2>
        </div>
        <div className='descripcion'>
            <p className='home-text info'> Desarrollador  con experiencia en tecnologías HTML, CSS, JavaScript y React.</p> 
            <a href="Curriculum_Rolin_Marcos.pdf" download>
                <button className='btn-cv'>Descargar CV</button>
            </a>
        </div>
    </div>
    <div className='conteiner-img-perfil'>
        <div className='cuadro'>
            <img className='perfil' src={perfil} alt='' />
        </div>
    </div>
</div>
)
}

export {HomePage}