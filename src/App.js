import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbarnew from './components/Navbarnew';
import Branches from './components/Branches';
import { FooterContainer } from './components/Footercontainer';
import DotLoader from "react-spinners/DotLoader";

const override= {
  display: "flex",
  margin: "0 auto",
  margintop: "20%",
  borderColor: "#ff5757",
};

const App = () => {


  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  return (
    <Router>
      {loading?
      <DotLoader
      color={"#ff5757"}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />:
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
      }
    </Router>
  );
}

export default App;
