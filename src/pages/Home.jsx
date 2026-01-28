
import React from 'react';
import { useNavigate } from 'react-router-dom';
import basketImg from '../assets/basket.png'

export default function Home() {
    const navigate = useNavigate();
    return(
    <div className="home">
        <section className="hero">
            <div className="hero-content">
                <h1>
                    Fresh Groceries, <br />
                    Deliered To Your Door
                </h1>

                <button className="shop-btn">Shop Now</button>
            </div>

            <div className="hero-image">
                <img src={basketImg} alt="Grocery basket" />
            </div>   
        </section>

    </div>
  );
}

