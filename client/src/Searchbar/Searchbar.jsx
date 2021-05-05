import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const Searchbar = () => {
    return (
        <div className="dropdown-main-container">
                <div className="dropdown-first-container">
                <span className="dropdown-first-container-text">Find</span>
                <span className="dropdown searchbar-placeholder">resume, projects, about...</span>
                <div className="dropdown-content">
                <p>Hello World!</p>
                </div>
                </div>
                <div className="dropdown-second-container">
                <span className="dropdown-second-container-text">Near</span>
                <span className="dropdown">Miami, FL</span>
                <div class="dropdown-search-icon-container">
                    <button className="dropdown-search-icon-button">
                    <SearchIcon className="dropdown-search-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
