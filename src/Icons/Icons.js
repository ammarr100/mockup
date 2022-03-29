import React from 'react';
import './Icons.css'


const Icons = ({logo,text}) => {


  return (
    
      <>


<div className='icon-items' data-aos='zoom-in'>
    <div className='icon-service'>
    <i class = {`icons-colors ${logo}`} ></i>
    </div>
    
<div className='icon_heading'>
<h1>{text}</h1>
</div>


</div>

                                  

                    
                
      </>
  )
};

export default Icons;
