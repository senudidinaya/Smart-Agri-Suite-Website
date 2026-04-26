import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Challenges from './components/Challenges';
import Research from './components/Research';
import Solution from './components/Solution';
import IntegrationSection from './components/IntegrationSection';
import Objectives from './components/Objectives';
import Methodology from './components/Methodology';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import Milestones from './components/Milestones';
import Documents from './components/Documents';
import Presentations from './components/Presentations';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-agri-earth dark:bg-agri-dark text-slate-800 dark:text-slate-200 transition-colors duration-500">
      <Navbar />
      <main>
        {/* Home */}
        <Hero />
        <About />
        <Challenges />
        {/* Domain */}
        <Research />
        <Solution />
        <IntegrationSection />
        <Objectives />
        <Methodology />
        <TechStack />
        <Timeline />
        {/* Milestones */}
        <Milestones />
        {/* Documents */}
        <Documents />
        {/* Slides */}
        <Presentations />
        {/* About Us */}
        <Team />
        {/* Contact Us */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
