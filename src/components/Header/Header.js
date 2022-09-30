import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="" />
            <div className="header-nav">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;