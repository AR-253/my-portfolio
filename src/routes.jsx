import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <About />
                        <Services />
                        <Portfolio />
                        <Contact />
                        <Footer />
                    </>
                } />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
