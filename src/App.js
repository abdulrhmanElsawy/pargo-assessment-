import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useRef } from "react";



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import UpperNav from './components/UpperNav';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import TrackPackage from './components/TrackPackage';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, [])
    
    
return (
    <div className="App">

            <UpperNav />
            <Navbar />
            <Landing />
            <TrackPackage />
            <Benefits />
            <Footer />
    </div>
);
}

export default App;
