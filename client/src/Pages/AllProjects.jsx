import React from 'react';
import AllProjectsPageNavbar from '../Navbar/AllProjectsPageNavbar';
import AllProjectCards from '../ProjectCards/AllProjectsPageCards';

const AllProjects = () => {
    return (
        <>
            <AllProjectsPageNavbar />
             <p className="all-projects-title">All Results</p>
             <div>
                 <AllProjectCards />
             </div>
        </>
    )
}

export default AllProjects
