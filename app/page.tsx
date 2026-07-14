import { Navigation, Hero, About, Skills, FeaturedProjects, AllProjects, Certifications, Contact, Footer } from '@/components';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <AllProjects />
      {/* <Experience /> */}
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

