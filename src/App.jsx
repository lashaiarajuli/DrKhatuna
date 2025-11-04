import './App.css';

import { Header } from './header/Header';
import { Home } from './home/Home.jsx';
import { About } from './about/About.jsx';
import { Service } from './services/Service.jsx'
import { Testimonials } from './testimonials/Tesimonials.jsx';
import { Small } from './small/Small.jsx';
import { Contact } from './contact/Contact.jsx';
import { Footer } from './footer/Footer.jsx';

import { HashRouter } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <Header />
      <Home />
      <About />
      <Service />
      <Small />
      <Testimonials />
      <Contact />
      <Footer />
    </HashRouter>
  );
}

export default App;

