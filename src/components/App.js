import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
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

// Pour la page d'accueil
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

// Pour la page À propos
function About() {
  return (
    <div>
      <Header />
        <div className="style-pageErreur">
          <img src={ pageErreur } alt="page 404" id="page_404" />
          <img src={ pageQuiNexistePas } alt="page qui n'existe pas" id="page_inexistante" />
        <div>
          <Link to="/"><img src={ retourPageDaccueil } alt="retour page d'accueil" id="retour_page_accueil"/></Link>
        </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;
