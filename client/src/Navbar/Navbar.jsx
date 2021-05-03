import React from 'react';
import Button from '@material-ui/core/Button';

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
                        Github
                        {/* <Button>Github</Button> */}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
