import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbarnew from './components/Navbarnew';
import Branches from './components/Branches';
import { FooterContainer } from './components/Footercontainer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbarnew />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
