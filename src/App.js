import React from 'react';
import Advisory from './Advisory/Advisory';
import Company from './Company/Company';
import Contact from './Contact/Contact';
import DesignIndex from './Design/DesignIndex';
import Focused from './Focused/Focused';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Icons from './Icons/Icons';
import IconsIndex from './Icons/IconsIndex';
import Navbar from './Navbar/Navbar';
import ProjectsIndex from './Projects/ProjectsIndex';
import TestimonialsIndex from './Testimonials/TestimonialsIndex';

const App = () => {
  return (
      <>
      
      <Navbar/>
      <Header/>    
      <IconsIndex/>
      <ProjectsIndex/>
      
      {/* <Advisory/> */}
          {/* 
                
          
          
          
          <Focused/>
          <Company/>
          <TestimonialsIndex/>
          <DesignIndex/>
          <Contact/>
          <Footer/> */}
      </>
  )
};

export default App;
