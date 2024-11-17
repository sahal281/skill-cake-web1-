// src/pages/CakeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const cakeDetailsData = {
    1: { name: 'Chocolate Cake', price: '500', description: 'Rich and moist chocolate cake.' },
    2: { name: 'Vanilla Cake', price: '400', description: 'Classic  Rich vanilla cake .' },
    3: { name: 'Red Velvet Cake', price: '600', description: 'Classic red velvet cake  .' },
    4: { name: 'Dark forest cake', price: '550', description: ' classic and simple Dark  forest .' },

};

function CakeDetails() {
    const { id } = useParams();
    const cake = cakeDetailsData[id];

    return (
        <div className="cake-details">
            <h2>{cake.name}</h2>
            <p>Price: {cake.price}</p>
            <p>{cake.description}</p>
            <button className="btn">Add to Cart</button>
        </div>
    );
}

export default CakeDetails;
