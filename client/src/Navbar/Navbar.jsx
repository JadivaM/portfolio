import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar-list-links">
                <li className="navbar-link">
                    Write a Review
                </li>
                <li className="navbar-link">
                    Contact
                </li>
                <li className="navbar-link">
                    About
                </li>
            </ul>
            <div className="right-navbar-buttons-container">
                    <ul className="navbar-buttons-list">
                    <li className="navbar-button navbar-underlined-text">
                        LinkedIn
                    </li>
                    <li className="navbar-button navbar-white-button">
                        <button>Github</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
