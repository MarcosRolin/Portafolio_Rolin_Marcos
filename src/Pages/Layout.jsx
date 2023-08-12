import { Outlet,Link } from 'react-router-dom';

import './Layout.css'

const Layout = () => {
  return (
    <div>
        <header className='header' >
        <div className='logo'>
            
        </div>
        <div className='container-nav'>
        <nav className='navigation'>
            <li className='li'><Link className='link' to='/'>Home</Link></li>
            <li className='li'><Link className='link' to='/contacto'>Contacto</Link></li>
        </nav>
        </div>
        </header>
        <Outlet/>
    </div>
  )
}
export default Layout;