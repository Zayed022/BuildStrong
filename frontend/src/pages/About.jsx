import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import About from '../components/AboutUs';
import Footer from '../components/Footer';

function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us - S.K Reality Construction",
    "url": "https://skrealityconstruction.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "S.K Reality Construction",
      "url": "https://skrealityconstruction.com",
      "logo": "SKlogo.png", // Replace with real logo URL
      "description": "S.K Reality Construction is a leading construction firm specializing in residential, commercial, and interior works in India.",
      "founder": {
        "@type": "Person",
        "name": "Shoyeb Khan" // Optional, replace with real founder's name
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "City",
        "addressRegion": "Maharashtra",
        "postalCode": "XXXXXX",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "Customer Support"
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>About Us | S.K Reality</title>
        <meta name="description" content="Learn more about S.K Reality Construction – our vision, mission, values, and the team behind successful residential and commercial projects." />
        <link rel="canonical" href="https://skrealityconstruction.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default AboutPage;
