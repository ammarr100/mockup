import React from 'react';
import './Projects.css'
// import './ProjectsGrid.css'

const Projects = ({projHeading, projText, projImage}) => {
  return (<>
      
                <div className='projects-text gap' data-aos='flip-left'>
                    <div className='text-color'>
                    <h1>{projHeading}</h1>
                    <p>{projText}</p>
                    </div>
                </div>
                <div className='projects-image gap' data-aos='flip-right'>
                    <img src={projImage} alt="" />
                </div>
            
  </>)
};

export default Projects;
