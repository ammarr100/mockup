import React, { useState } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import './Navbar.css'
import {FiMenu} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const openHam = <FiMenu onClick={()=>setToggle(!toggle)}/>

    const closeHam = <CgClose onClick={()=>setToggle(!toggle)}/>

  return (
      <>
          <section className='navbar-desktop'>
                <div className='desktop-container container'>
                <div className='logo'>
                    <h1>Logo</h1>
                </div>
                    <div className='desktop-links'>
                    <Desktop/>
                    </div>
                </div>
          </section>
          
          <section className='navbar-mobile'>
                <div className='mobile-container container'>
    
                    <div className='ham-icon'>
                    
                    {toggle ? closeHam : openHam}
                    </div>
                    <div className='mobile-links'>
                    
                    {toggle && <Mobile/>}
                    
                    </div>
                </div>
          </section>
          
      </>
  )
};

export default Navbar;
