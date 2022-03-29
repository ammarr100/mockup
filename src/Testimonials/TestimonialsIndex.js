import React from 'react';
import TData from './TData';
import Testimonials from './Testimonials';

const TestimonialsIndex = () => {
  return (<>

<section className='testi'>
<div className='testi-heading container'>
                    <h1 data-aos='zoom-in'>What do our users say ?</h1>
                    </div>
                <div className='testi-container container'>
                    
      {
          TData.map((items, index)=>(
              <Testimonials
                testiText={items.testiText}
                person={items.person}
                userName={items.userName}
                position={items.position}
                key={items.userName + index}
              />
          ))
      }

            </div>
          </section>
  </>
  )
};

export default TestimonialsIndex;
