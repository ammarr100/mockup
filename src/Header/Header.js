import React from 'react';
import './Header.css'
import header from '../Header/header.jpg'
const Header = () => {
  return (
      <>
        <section className='header'>
            <div className='header-container'>  

              <img src={header} alt="" data-aos='zoom-in'/>  
           
            
            </div>
        </section>
      </>
  )

};

export default Header;
