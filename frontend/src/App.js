import React from 'react';

import {Header, About, Work, Skills, Testimonial, Contact} from './container';
import {Navbar} from './components';
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Contact/>
    <Footer />
  </div>
);

export default App;