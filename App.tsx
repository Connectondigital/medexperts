import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import AppointmentSearch from './components/AppointmentSearch';
import About from './components/About';
import Specialties from './components/Specialties';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <AppointmentSearch />
        <About />
        <Specialties />
        <Doctors />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;