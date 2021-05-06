import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const SmallSearchbar = () => {
    return (
        <div className="small-searchbar-main-container">
                <div className="dropdown-first-container">
                <span className="small-searchbar-placeholder">resume, projects, about...</span>
                <div className="dropdown-content">
                <p>Hello World!</p>
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