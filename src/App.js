import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home'; 
import Footer from './components/Footer';
 // Create a simple Home component if needed

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} /> {/* Projects page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
