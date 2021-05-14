import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';

const SmallSearchbar = () => {
    return (
        <div className="small-searchbar-main-container">
                <div className="dropdown-first-container">
                <span className="small-searchbar-placeholder">resume, projects, about...</span>
                <div className="dropdown-content">
                <Link to="/" style={{textDecoration: 'none', color: "#000"}}>
                <p className="dropdown-link">Home</p>
                </Link>
                <Link to="/about" style={{textDecoration: 'none', color: "#000"}}>
                <p className="dropdown-link">About</p>
                </Link>
                </div>
                </div>
                <div className="dropdown-second-container">
                <span className="small-searchbar-location">Miami, FL</span>
                <div class="dropdown-search-icon-container">
                    <button className="small-searchbar-icon-button">
                    <SearchIcon fontSize="large" className="dropdown-search-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SmallSearchbar;