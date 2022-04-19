import './App.scss';
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
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    
      <div className={isDarkMode ? "App" : "App try"}>
        <NavBar
          theme = {isDarkMode}
          setTheme = {setIsDarkMode}
        />
        
        <div className="main-content">
          
          <Hero />
          <About />
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
