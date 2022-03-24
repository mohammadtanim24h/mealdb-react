import React from 'react';
import Image from '../../images/meal-db-logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={Image} alt="" />
            <nav className='navlinks'>
                <a href="/mome">Home</a>
                <a href="/meals">Meals</a>
                <a href="/about">About</a>
                <a href="/news">News</a>
            </nav>
        </div>
    );
};

export default Header;