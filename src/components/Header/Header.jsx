import './Header.css'
import portada from '../images/portada1.png'
const Header = () => {

    return (

        <div className='portada'>
            <div className='container-portada'>
            <h1 className='title1'>Rolin Marcos</h1>
            <h2 className='title2'>Desarrollador Web</h2>
            </div>
            <img className='portada-img' src={portada} alt='' />
        </div>
        )
        }

export {Header}