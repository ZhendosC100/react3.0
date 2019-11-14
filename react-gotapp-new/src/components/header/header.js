import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="headers-block">
            <h3 className="headers-title">
                <a href="#2">
                Game of Thrones DB
                </a>
            </h3>
            <ul className="headers-links">
                <li>
                    <a href="#2">Characters</a>
                </li>
                <li>
                    <a href="#2">Houses</a>
                </li>
                <li>
                    <a href="#2">Books</a>   
                </li>
            </ul>
        </div>
    );
};

export default Header;