// src/pages/Cakes.js
import React from 'react';
import CakeCard from '../components/CakeCard';

const cakesData = [
    { id: 1, name: 'Chocolate Cake', price: 'rupees 500', image: 'https://tse4.mm.bing.net/th?id=OIP.zJ4OwfLZrL9qABqx-HSYWwHaHa&pid=Api&P=0&h=180' },
    { id: 2, name: 'Vanilla Cake', price: 'rupees 400', image: 'https://tse3.mm.bing.net/th?id=OIP.ZIQ1S_VWCELnbWiGuuPZpgHaKX&pid=Api&P=0&h=180' },
    { id: 3, name: 'Red velvet Cake', price: 'rupees 600', image: 'https://tse3.mm.bing.net/th?id=OIP.eP4IHmdXFdKe7lKN7Xc6uAHaFn&pid=Api&P=0&h=180' },
    { id: 4, name: 'Dark forest cake', price: 'rupees 550', image: 'https://tse4.mm.bing.net/th?id=OIP.XtwvjcFXNcI4l82k88gogQHaHa&pid=Api&P=0&h=180' },
    
];

function Cakes() {
    return (
        <div className="cakes">
            <h2>Our Cakes</h2>
            <div className="cakes-grid">
                {cakesData.map((cake) => (
                    <CakeCard key={cake.id} cake={cake} />
                ))}
            </div>
        </div>
    );
}

export default Cakes;
