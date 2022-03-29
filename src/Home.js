import React,{useEffect} from 'react';
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
import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000, offset:200})
  },[])
  return (
      <>
      
      <Navbar/>
      <Header/>    
      <IconsIndex/>
      <ProjectsIndex/>
      <Focused/>
      <Company/>
      <TestimonialsIndex/>
      <DesignIndex/>
      <Contact/>
      <Footer/>
    
      {/* <Advisory/> */}
          
      </>
  )
};

export default Home;
