import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Falls du CSS importieren möchtest
import Header from './Components/Header';
import About from './Components/About'; // Die About-Komponente als Startseite
import ProductList from './Components/ProductList'; // Die ProductList-Komponente

function App() {
    return (
      <Router>
          {/* Header wird auf allen Seiten angezeigt */}
          <Header />
  
          {/* Routing für verschiedene Seiten */}
          <Routes>
            <Route path="/" element={<About />} /> {/* Der Inhalt der About-Komponente wird hier angezeigt */}
            <Route path="/productlist" element={<ProductList />} /> {/* ProductList-Seite */}
          </Routes>
      </Router>
    );
  }
  
  export default App;