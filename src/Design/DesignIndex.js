import React from 'react';
import Design from './Design';
import TDesign from './TDesign';

const DesignIndex = () => {
  return (
      <>
      <section className='design'>
            <div className='design-heading'>
                <h1>Design and Development</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Molestiae, rerum?</p>
                </div>
                <div className='design-container container'>
          {
              TDesign.map((items,index)=>(
                <Design
                  DesignHeading={items.DesignHeading}
                  DesignList={items.DesignList}  
                  plus={items.plus}
                  key={items.DesignHeading + index}
                />
              ))
          }
          </div>
          </section>
      </>
  )
};

export default DesignIndex;
