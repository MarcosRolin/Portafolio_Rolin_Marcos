import React from 'react'
import './Footer.css';

const Footer = () => {
return (
<div className='footer'>
  <div className='footer-container'>
    <div className='footer-column'>
      <h3>Dirección</h3>
      <p>C.A.B.A</p>
      <p>Buenos Aires</p>
    </div>
    <div className='footer-column'>
      <h3>Contacto</h3>
      <p>Teléfono: +543772589956</p>
      <p>Email: rolinmarcos1327@gmail.com</p>
      <div className='social-icons'>
        <a href='https://wa.link/8nymnc'>
          <i className='fab fa-whatsapp'></i>
        </a>
        <a href='https://www.instagram.com/marcos.r1327/'>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='https://rolinmarcos1327@gmail.com'>
          <i className='far fa-envelope'></i>
        </a>
        <a href='https://www.facebook.com/marcosrolin30'>
          <i className='fab fa-facebook'></i>
        </a>
      </div>
    </div>
  </div>
</div>
);
};

export {Footer}



