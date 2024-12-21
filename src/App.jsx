import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header';
import About from './Components/About';
import ProductList from './Components/ProductList';

function App() {
    const [cartCount, setCartCount] = useState(0); // Zustand für die Warenkorbanzahl

    const addToCart = () => {
        setCartCount(cartCount + 1); // Anzahl um 1 erhöhen
    };

    return (
        <Router>
            <Header cartCount={cartCount} /> {/* Übergabe des Zustands an den Header */}
            
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/productlist" element={<ProductList onAddToCart={addToCart} />} /> {/* Funktion an ProductList übergeben */}
            </Routes>
        </Router>
    );
}

export default App;
