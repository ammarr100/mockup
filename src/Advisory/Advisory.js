import React from 'react';
import './Advisory.css'
import image1 from '../images/001.jpg'
import image2 from '../images/02.jpg'
import image3 from '../images/03.jpg'

const Advisory = () => {
  return (
      <>
    <section className='advise'>
    <div className='advise-container '>
    <div className='advise-heading'>
    <h1>Our Mockup Projects</h1>                
    </div>
            <div className='image-group1'>
            <div className='advise-image2'>
                <img src={image2} alt="" />
                </div>
                <div className='advise-image1'>
                <img src={image1} alt="" />
                </div>
                <div className='advise-image4'>
                
                </div>
                
                <div className='advise-image3'>
                <img src={image3} alt="" />
                </div>
            </div>
            
            
            <div className='advise-text'>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
            </div>
            <button className='advise-btn'><a href="">Learn More</a></button>
            
            
            </div>
          </section>
      </>
  )
};

export default Advisory;
