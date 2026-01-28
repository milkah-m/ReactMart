
import React from 'react';
import { useNavigate } from 'react-router-dom';
import basketImg from '../assets/basket.png'

export default function Home() {
    const navigate = useNavigate();
    return(

    <div className="home">
            <div className="hero-content">
                <h1> REACTMART   </h1>
                <img src={basketImg} alt="Grocery basket" className='basket' />
                <p>ONE STOP FOR ALL YOUR GROCERIES</p>
                <button className="shop-btn" onClick={() => navigate("/shop")}>
                    Shop Now
                    </button>
            </div>
          </div>   
  );
}
