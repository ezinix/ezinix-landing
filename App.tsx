import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { QualityChecks } from './components/QualityChecks';
import { Brands } from './components/Brands';
import { LeadForm } from './components/LeadForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <QualityChecks />
        <Brands />
        <LeadForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;