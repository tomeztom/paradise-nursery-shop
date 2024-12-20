import React from 'react';
import './Card.scss'; // Optional: Für das Styling der Card-Komponente

function Card({ plant }) {
  return (
    <div className="card">
      <img className="card__image" src={plant.image} alt={plant.name} />
      <div className="card__details">
        <h3 className="card__name">{plant.name}</h3>
        <p className="card__price">${plant.price}</p>
        <button className="btn btn-primary item" onClick={() => console.log(`Added ${plant.name} to the cart`)}>
          In den Warenkorb
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
      </div>
    </div>
  );
}

export default Card;
