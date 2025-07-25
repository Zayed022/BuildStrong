import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import WeOffer from '../components/WeOffer';
import About from '../components/AboutUs';
import TechnicalExpertise from '../components/TechnicalExpertise';
import QA from '../components/QA';
import FeaturedProjects from '../components/FeaturedProjects';
import Journey from '../components/Journey';

function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "S.K Reality Construction",
    "url": "https://skrealityconstruction.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://skrealityconstruction.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "S.K Reality Construction",
    "url": "https://skrealityconstruction.com",
    "logo": "https://skrealityconstruction.com/logo.png", // Replace with actual logo URL
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "Customer Support",
      "areaServed": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/skreality",  // Replace with actual social URLs
      "https://www.facebook.com/skreality"
    ]
  };

  return (
    <div>
      <Helmet>
        <title>S.K Reality Construction | Residential, Commercial & Interior Projects</title>
        <meta
          name="description"
          content="S.K Reality Construction offers expert residential, commercial, and interior design & build services. Explore our featured projects and technical expertise."
        />
        <link rel="canonical" href="https://skrealityconstruction.com/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationData)}
        </script>
      </Helmet>

      <Navbar />
      <Hero />
      <WeOffer />
      <About />
      <Journey />
      <TechnicalExpertise />
      <FeaturedProjects />
      <QA />
      <Footer />
    </div>
  );
}

export default Home;
