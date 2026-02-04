import React from 'react'
import About from "../Modules/About/Hero"
import AboutUS from '../Modules/About/AboutUS'
import AboutServices from "../Modules/About/AboutServices/AboutServices"
import TeamSection from "../Modules/Home/TeamSection"
import CounterSection from "../Modules/Home/CounterSection"
import BlogSection from '../Modules/About/BlogSection/Blog'
import Footer from "../Layout/Footer"
const AboutSection = () => {
  return (
    <>
    <About/>
    <AboutUS/>
    <AboutServices />
    <TeamSection/>
    <CounterSection/>
    <BlogSection/>
    <Footer/>
    </>
  )
}

export default AboutSection