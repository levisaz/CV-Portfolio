import './App.scss';
import './styles/LightTheme.scss';
import React, {useState} from 'react'

/* components */
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
/* import DarkModeToggle from "react-dark-mode-toggle"; */
import ScrollToTop from "react-scroll-to-top";

import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  AOS.init();
  return (
    
      <div className={isDarkMode ? "App" : "App light-mode"}>
        <NavBar
          theme = {isDarkMode}
          setTheme = {setIsDarkMode}
        />
        
        <div className="main-content">
          
          <Hero  />
          <About data-aos="zoom-in-up" />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          
        </div>
        <ScrollToTop smooth top="800" />
    </div>
    
  );
}

export default App;
