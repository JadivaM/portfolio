import React from 'react';
import Divider from '@material-ui/core/Divider';

const Searchbar = () => {
    return (
        <div className="dropdown-main-container">
                <div className="dropdown-first-container">
                <span className="dropdown-first-container-text">Find</span>
                <span className="dropdown searchbar-placeholder">resume, projects, about...</span>
                <div class="dropdown-content">
                <p>Hello World!</p>
                </div>
                </div>
                {/* <Divider style={{height: 5}}orientation="vertical" light={true} /> */}
                <div className="dropdown-second-container">
                <span className="dropdown-second-container-text">Near</span>
                <span className="dropdown">Miami, FL</span>
                <div class="dropdown-content">
                <p>Hello World!</p>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
