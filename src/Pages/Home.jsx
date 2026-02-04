
import React from 'react'
// import PropertySection from '../Modules/Home/PropertySection'
import CardSection from '../Modules/Home/CardSection/ServiceSection.jsx'
// import DeluxeSection from "../Modules/Home/DeluxeSection/DeluxeSection";
// import VideoSection from "../Modules/Home/VideoSection.jsx";
import HeroSection from '../Modules/Home/HeroSection.jsx'
import AboutOne from "../Modules/Home/AboutOne.jsx";
import EventMarquee from "../Modules/Home/EventSection/EventMarquee";
import EventContact from "../Modules/Home/ContactSection/EventContact.jsx";
import CounterSection from "../Modules/Home/CounterSection";
// import FacilitiesSection from "../Modules/Home/Facilities/FacilitiesSection.jsx"
// import CardSlider from "../Modules/Home/CardSlider/CardSlider.jsx"
import ServicesSection from '../Modules/Home/ServicesSection/Service.jsx'
import TeamSection from '../Modules/Home/TeamSection.jsx';
import Testimonial from '../Modules/Home/TestimonialSection/Testimonial.jsx';
import Footer from '../Layout/Footer.jsx';

function Home() {
  return (
    <>
      <HeroSection/>
        <AboutOne/> 
        <CardSection/>
      <EventMarquee />
      <EventContact/>
        <CounterSection/>
        <ServicesSection/>
        <TeamSection/>
        <Testimonial/>
        <Footer/>
      {/* <PropertySection/>
      
       <FeaturedProperties />
       <DeluxeSection/>
       <VideoSection/>
      <FacilitiesSection/>
      <CardSlider/>    */}

    </>
  )
}
export default Home
