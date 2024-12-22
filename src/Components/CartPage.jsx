import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "./CartPage.scss";

function CartPage({ cartItems, updateCartItem, removeFromCart }) {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <main className="cart-page">
            <section className="hero">
                <div className="hero__container">
                    <div className="hero__image">
                        <img src="assets/hero-image-3.webp" alt="Hero Banner" />
                    </div>
                    <div className="hero__item hero__item--title">
                        <h1 className="hero__title">Your Shopping Cart</h1>
                    </div>
                </div>
            </section>

            <div className="cart-container">
                {totalItems === 0 ? (
                    <div className="empty-cart-message">
                        <h2>Your cart is empty</h2>
                        <p>
                            Looks like you haven't added any plants to your cart
                            yet.
                        </p>
                        <Link to="/productlist" className="btn btn-primary">
                            Continue Shopping
                            <div className="btn-arrow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="13"
                                        viewBox="0 0 14 13"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.69603 0.870117L12.9993 6.17342M12.9993 6.17342L7.69603 11.4767M12.9993 6.17342L1 6.17342"
                                            strokeWidth="1.3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                        </Link>
                    </div>
                ) : (
                    <>
                        <section className="cart-items">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    updateCartItem={updateCartItem}
                                    removeFromCart={removeFromCart}
                                />
                            ))}
                        </section>

                        <section className="cart-summary">
                            <h3>Total Items: {totalItems}</h3>
                            <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                            <button
                                className="btn btn-primary"
                                disabled={totalItems === 0}
                            >
                                Checkout
                                <span className="btn-arrow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="13"
                                        viewBox="0 0 14 13"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.69603 0.870117L12.9993 6.17342M12.9993 6.17342L7.69603 11.4767M12.9993 6.17342L1 6.17342"
                                            strokeWidth="1.3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="currentColor"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                            <Link
                                to="/productlist"
                                className="btn btn-secondary"
                            >
                                Continue Shopping
                                <span className="btn-arrow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="13"
                                        viewBox="0 0 14 13"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.69603 0.870117L12.9993 6.17342M12.9993 6.17342L7.69603 11.4767M12.9993 6.17342L1 6.17342"
                                            strokeWidth="1.3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="currentColor"
                                        ></path>
                                    </svg>
                                </span>
                            </Link>
                        </section>
                    </>
                )}
            </div>
        </main>
    );
}

export default CartPage;
