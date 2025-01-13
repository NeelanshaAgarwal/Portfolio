import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Project from './sections/Project';
import Contact from './sections/Contact';
import StarsCanvas from './components/Stars';
import Footer from './sections/Footer';

const App = () => {
  return (
    <main className='mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </main>
  )
}

export default App
