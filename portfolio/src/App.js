import './App.scss';


/* components */
import NavBar from './components/NavBar'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <div className="topnav"><NavBar /></div>
      <div className="main-content"></div>
      <Footer />
    </div>
  );
}

export default App;
