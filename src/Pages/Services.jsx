import React from 'react'
import ServiceHero from '../Modules/Services/ServiceHero'
import AbServices from '../Modules/Services/AboutServices/AbServices'
import Rewiew from '../Modules/Services/ClientRewiew/Rewiew'
import Footer from '../Layout/Footer'

const Services = () => {
  return (
    <>
    <ServiceHero/>
    <AbServices/>
    <Rewiew/>
    <Footer/>
    </>
  )
}

export default Services