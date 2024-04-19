import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ValeurApropos from './ValeurApropos';
import SectionUne from './SectionUne';
import Gallery from './Gallery';
import pageErreur from '../assets/404.png';
import pageQuiNexistePas from '../assets/pageQuiNexistePas.png';
import retourPageDaccueil from '../assets/retourPageDaccueil.png';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Header />
        <div>
          <SectionUne />
          <div className="bodyGallery">
          <Gallery />
          </div>
        </div>
      <Footer />
    </div>
  );
}

function About() {
  return (
    <div>
      <Header />
      <div className='style_section'>
        <h1></h1>
		</div>
      <ValeurApropos />
      <Footer />
    </div>
  );
}

export default App;
