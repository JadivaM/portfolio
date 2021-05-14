import React from 'react';
import SkillsSection from '../AboutMe/SkillsSection';
import SmallNavbar from '../Navbar/AllProjectsPageNavbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from 'react-router-dom';


const AboutPage = () => {
    return (
        <>
        <SmallNavbar />
        <div className="about-me-page-container">
            <p className="about-me-name-header">Jadiva Montealegre</p>
            <p className="experience-header">Full-stack developer</p>
            <div className="about-me-connect-links">
                <Link to={{ pathname: "https://www.linkedin.com/in/jadivamontealegre/"}} target="_blank" style={{textDecoration: 'none', color: "#fff"}}>
                <p className="about-me-linkedin"> <LinkedInIcon fontSize="small" className="about-me-button-icons" />LinkedIn</p>
                </Link>
                <Link to={{ pathname: "https://github.com/JadivaM"}} target="_blank" style={{textDecoration: 'none', color: "#2B273D"}}>
                <p className="about-me-github"> <GitHubIcon fontSize="small" className="about-me-button-icons" /> Github</p>
                </Link>
            </div>
            <p className="about-me-header">About me</p>
            <p className="about-me-text">I am a full-stack developer having attended a coding bootcamp in Miami, FL called Wyncode Academy (now BrainStation). My background before becoming a full-stack developer was in customer service and psychology research. After graduating from the program, I became a teaching assistant helping students enrolled in the same program. I am passionate about software engineering, web development, and technology always striving to learn and grow as a developer.</p>
            <p className="skills-header">Skills</p>
            <SkillsSection />
        </div>
        </>
    )
}

export default AboutPage
