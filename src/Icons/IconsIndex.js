import React from 'react';
import Icons from './Icons';
import IconsData from './IconsData';

const IconsIndex = () => {
    
  return (
      <>

<section className='icon'>
    <div className='icon-container container'>
    {
IconsData.map((items, index)=>(
    
    <Icons
    text = {items.text}                
    logo = {items.logo}                
    key = {items.text + index}
    
    />
))

}


</div>
</section>
</>
  )
};

export default IconsIndex;
