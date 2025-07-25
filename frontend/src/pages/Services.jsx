import { Helmet } from 'react-helmet';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Services from '../components/Services';
function ServicesPage() {
  return (
    <div>
      <Helmet>
        
        <title>Construction Services | S.K Reality</title>
        <meta
          name="description"
          content="Explore comprehensive construction services offered by S.K Reality including RCC, interior works, waterproofing, project management, and more."
        />
        <link rel="canonical" href="https://skrealityconstruction.com/services" />
      </Helmet>
      <Navbar />
      <Services />
      <Footer />
    </div>
  );
}

export default ServicesPage