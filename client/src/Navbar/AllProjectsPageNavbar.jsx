import React from 'react';
import SmallSearchbar from '../Searchbar/SmallSearchbar';
import SmallLogo from '../Small logo/SmallLogo';
import {Link} from 'react-router-dom';

const AllProjectsPageNavbar = () => {
    return (
        <>
            <div className="all-projects-nav-container">
            <Link to="/" style={{textDecoration: 'none', color: "#000"}}>
            <div className="all-projects-logo-container">
                <SmallLogo />
            </div>
            </Link>
            <div className="all-projects-searchbar-container">
                <SmallSearchbar />
            </div>
        </div>
        </>
    )
}

export default AllProjectsPageNavbar
