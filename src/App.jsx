import  Loader  from './Components/Loader';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import { useEffect } from 'react';
import React from 'react';
import './App.css';


function App() {
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

  return (
    
    <div className="main">
<Loader>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Certificates />
      <Contact />
      </Loader>

    </div>
  );
}

export default App;

