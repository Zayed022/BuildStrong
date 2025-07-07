import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import WeOffer from '../components/WeOffer'
import About from '../components/AboutUs'
import TechnicalExpertise from '../components/TechnicalExpertise'
import QA from '../components/QA'
import FeaturedProjects from '../components/FeaturedProjects'
import Journey from '../components/Journey'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WeOffer/>
      <About/>
      <Journey/>
      <TechnicalExpertise/>
      <FeaturedProjects/>
      <QA/>

      <Footer/>
    </div>
  )
}

export default Home
