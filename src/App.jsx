import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header";
import About from "./Components/About";
import ProductList from "./Components/ProductList";
import CartPage from "./Components/CartPage";

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (plant) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === plant.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === plant.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...plant, quantity: 1 }];
        });
    };

    const updateCartItem = (id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Router>
            <Header cartCount={cartCount} />
            <Routes>
                <Route path="/" element={<About />} />
                <Route
                    path="/productlist"
                    element={
                        <ProductList
                            onAddToCart={addToCart}
                            cartItems={cartItems}
                            cartCount={cartCount}
                        />
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <CartPage
                            cartItems={cartItems}
                            updateCartItem={updateCartItem}
                            removeFromCart={removeFromCart}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
