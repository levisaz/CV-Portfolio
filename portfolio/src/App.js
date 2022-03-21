import './App.scss';
import React from 'react'

/* components */
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  
  return (
    
      <div className="App">
        <NavBar />
        <div className="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      
    </div>
    
  );
}

export default App;
