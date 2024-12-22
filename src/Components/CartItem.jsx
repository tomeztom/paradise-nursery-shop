import React from "react";
import "./CartItem.scss";

function CartItem({ item, updateCartItem, removeFromCart }) {
    const handleIncrease = () => updateCartItem(item.id, item.quantity + 1);
    const handleDecrease = () => updateCartItem(item.id, item.quantity - 1);

    return (
        <div className="cart-item">
            <div className="cart-item__image-wrapper">
                <img
                    className="cart-item__image"
                    src={item.image}
                    alt={item.name}
                />
            </div>
            <div className="cart-item__details">
                <div className="cart-item__infos">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                </div>
                <div className="cart-item__tools">
                    <div className="cart-item__quantity">
                        <button
                            onClick={handleDecrease}
                            disabled={item.quantity === 1}
                        >
                            <svg
                                width="10"
                                height="2"
                                viewBox="0 0 10 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M-1.58946e-08 0.5L10 0.5L10 1.5L-6.14273e-08 1.5L-1.58946e-08 0.5Z"
                                    fill="#332A23"
                                />
                            </svg>
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={handleIncrease}>
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.47656 10V0H5.51823V10H4.47656Z"
                                    fill="#332A23"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M-1.58946e-08 4.47852L10 4.47852L10 5.52018L-6.14273e-08 5.52018L-1.58946e-08 4.47852Z"
                                    fill="#332A23"
                                />
                            </svg>
                        </button>
                    </div>
                    <button
                        className="btn-remove"
                        onClick={() => removeFromCart(item.id)}
                    >
                        Remove
                    </button>
                </div>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        </div>
    );
}

export default CartItem;
