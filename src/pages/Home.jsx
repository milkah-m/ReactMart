
import React from 'react';

export default function Home() {
    return (
        <div className="home">
            <header className='hero-banner'>
                <nav className='navbar'>
                    <div className='logo'>Grocery Logo</div>
                    <ul className='nav-links'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Products</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </nav>
                <div className='hero-content'>
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
