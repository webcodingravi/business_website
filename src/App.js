import React from 'react';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <>
   <div className="App">
     { /*Components*/}
    <Navbar/>
    <Home />
    <About />
    <Services />
    <Blog />
    <Contact />
    <Footer />
   </div>
   </>
  );
}

export default App;
