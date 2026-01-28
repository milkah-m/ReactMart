
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <header className='hero-banner'>
                <div className='logo'>Grocery Logo</div>
                <nav className='navbar'>
                    
                    <ul className='nav-links'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/shop'>Products</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/contact'>Contact</a></li>
                        <li className='cart'><a href='/cart'>Cart</a></li>
                    </ul>
                </nav>
                <div className='hero-content' onClick={() => navigate("/shop")}>
                    <h1>Fresh Groceries Delivered To Your Door</h1>
                    <p>Shop fresh fruits, vegetables and daily essentials with ease</p>
                    <div className='hero-btn'>
                        <button className='shop-btn'>Shop Now</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

