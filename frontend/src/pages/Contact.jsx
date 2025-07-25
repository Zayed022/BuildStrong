import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function ContactPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact S.K Reality",
    "url": "https://skrealityconstruction.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "S.K Reality Construction",
      "url": "https://skrealityconstruction.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",  // Replace with your actual number
        "contactType": "Customer Support",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us | S.K Reality</title>
        <meta name="description" content="Get in touch with S.K Reality for residential, commercial, or interior construction services. Call or email us today." />
        <link rel="canonical" href="https://skrealityconstruction.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;
