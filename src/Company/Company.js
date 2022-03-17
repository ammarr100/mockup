import React from 'react';
import './Company.css'
import {TiTickOutline} from 'react-icons/ti'
import { IconContext } from 'react-icons';
const Company = () => {
  return (
      <>
<IconContext.Provider value={{size:'3rem', color:'#F6DA0A'}}>
<section className='company'>
<div className='company-container container'>
    <div className='company-textbox1'>
        <h1>Company</h1>
        <h2>Elementum eu facilisis sed odio morbi quis</h2>
        <p>Massa ultricies mi quis hendrerit dolor magna eget est. Lacinia at quis risus sed vulputate odio ut enim blandit. Auctor elit sed vulputate mi sit. Massa tincidunt dui ut ornare lectus. Turpis egestas sed tempus urna et. Diam vulputate ut pharetra sit amet aliquam id. Nisi est sit amet facilisis. In nisl nisi scelerisque eu ultrices vitae. Massa ultricies mi quis hendrerit dolor magna eget est. Lacinia at quis risus sed vulputate odio ut enim blandit. Auctor elit sed vulputate mi sit. ​Massa ultricies mi quis hendrerit dolor magna eget est. Lacinia at quis risus sed vulputate odio ut enim blandit. Auctor elit sed vulputate mi sit. Massa tincidunt dui ut ornare lectus. Turpis egestas sed tempus urna et. Diam vulputate ut pharetra sit amet aliquam id.</p>
        <button className='company-btn'><a href="">Learn More</a></button>
</div>
        <div className='company-textbox2'>
            <h1>Milestones</h1>
            <ul><li><TiTickOutline/> Founded in 2015</li>
            <li> <TiTickOutline/> Reach over 4M downloads</li>
            <li><TiTickOutline/> Raise $10M+ in funding</li>
            <li><TiTickOutline/> Turpis egestas sed</li>
            <li><TiTickOutline/> 24\7 native suppport</li>                        
            </ul>
            
        </div>
                </div>
          </section>
</IconContext.Provider>
      </>
  )
};

export default Company;
