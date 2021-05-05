import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import ProjectCards from '../ProjectCards/ProjectCards';

const Home = () => {
    return (
        <>
        <div>
            <HeroSection />
        </div>
        <div>
            <p className="recent-activity-text">Recent Activity</p>
            <ProjectCards />
        </div>
        </>
    )
}

export default Home
