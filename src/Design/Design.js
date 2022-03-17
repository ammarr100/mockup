import React from 'react';
import './Design.css'
import {BsPlusLg} from 'react-icons/bs'

const Design = ({DesignHeading,plus, DesignList}) => {
  return (
      <>
          
            
            <div className='design-items'>
            <h1>{DesignHeading}</h1>
            <ul> 
            <li>{plus}</li>           
            <li> {DesignList}</li></ul>
            </div>
            
         
      </>
  )
};

export default Design;
