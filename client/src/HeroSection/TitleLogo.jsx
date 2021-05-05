import React from 'react';
import yelpLogo from '../HeroImages/yelpLogo.png';

const TitleLogo = () => {
    return (
        <div className="logo-title-container">
            <p className="logo-title">Jadiva</p>
            <img className="logo" src={yelpLogo} alt="logo of name Jadiva"/>
        </div>
    )
}

export default TitleLogo
