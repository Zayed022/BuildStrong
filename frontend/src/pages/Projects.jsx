import { Helmet } from "react-helmet";
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { projects } from '../data/projects.js'; // or wherever you exported it from

function ProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Projects",
    "url": "https://skrealityconstruction.com/projects",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": project.title,
        ...(project.image && { image: `https://skrealityconstruction.com${project.image}` }),
        ...(project.description && { description: project.description }),
        ...(project.location && { location: project.location }),
        ...(project.url && { url: `https://skrealityconstruction.com/projects#${project.title.replace(/\s+/g, '-').toLowerCase()}` })
      }))
    }
  };

  return (
    <div>
      <Helmet>
        <title>Projects | S.K Reality</title>
        <meta
          name="description"
          content="Explore landmark residential and commercial construction projects completed or ongoing by S.K Reality across Maharashtra."
        />
        <link rel="canonical" href="https://skrealityconstruction.com/projects" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}

export default ProjectsPage;
