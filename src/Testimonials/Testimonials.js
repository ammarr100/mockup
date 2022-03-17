import React from 'react';
import './Testimonials.css'

const Testimonials = ({testiText, person, userName, position}) => {
  return (
      <>
          
                    <div className='testi-items'>
                    <div className='testi-text'>
                    <p className='para'>{testiText}</p>
                    <div className='testi-image'>
                    <img src={person} alt="" />
                    </div>
                    
                    <h2>{userName}</h2>
                    <p className='position'>{position}</p>

                    </div>
                    </div>
                
      </>
  )
};

export default Testimonials;
