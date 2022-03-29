import React from 'react';
import man from '../images/04.jpg'
import './Focused.css'
const Focused = () => {
  return(
      <>
          <section className='focused'>
                <div className='focused-container container'>
                    <div className='image-background' data-aos='flip-down'>
                    <div className='focused-image' >
                    <img src={man} alt="" />
                    </div>
                    </div>
                    

                    <div className='heading-text' data-aos='flip-down'>
                    <h1>Focused Design</h1>
                    <p>Dui ut ornare lectus sit amet. Sollicitudin nibh sit amet commodo nulla. Tristique risus nec feugiat in fermentum. Sit amet venenatis urna cursus eget nunc scelerisque. Aliquet lectus proin nibh nisl.</p>
                    </div>
                    <div className='heading-text' data-aos='flip-down'>
                    <h1>Website Design</h1>
                    <p>Dui ut ornare lectus sit amet. Sollicitudin nibh sit amet commodo nulla. Tristique risus nec feugiat in fermentum. Sit amet venenatis urna cursus eget nunc scelerisque. Aliquet lectus proin nibh nisl.</p>
                    </div>
                    <button className='advise-btn'><a href="">Learn More</a></button>
                </div>
          </section>
      </>
  )
};

export default Focused;
