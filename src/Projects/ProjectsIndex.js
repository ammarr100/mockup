import React from 'react';
import PData from './PData';
import Projects from './Projects';

const ProjectsIndex = () => {
  return (
      <>
      <section className='projects'>
            <div className='projects-container container'>
            <div className='project-Heading' data-aos='zoom-in'>
                <h1>Our Projects</h1>
                <p>“You can do anything you set your mind to.”<br />
                - Benjamin Franklin</p>
            </div>
            <div className='project-items'>
            {
          PData.map((items, index)=>(
              <Projects
                projHeading={items.projHeading}
                projText={items.proText}
                projImage={items.proImage}
                key={items.projHeading + index}

              />
          ))
          }
            </div>
         
</div>
      </section>
      </>
  )
};

export default ProjectsIndex;
