import React from 'react';
import {Link} from 'react-router-dom';

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
                    <Link to={{ pathname: "https://www.linkedin.com/in/jadivamontealegre/"}} target="_blank" style={{textDecoration: 'none', color: "#fff"}}>
                    <li className="navbar-button navbar-underlined-text">
                        LinkedIn
                    </li>
                    </Link>
                    <Link to={{ pathname: "https://github.com/JadivaM"}} target="_blank" style={{textDecoration: 'none', color: "#fff"}}>
                    <li className="navbar-button navbar-white-button">
                        Github
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
