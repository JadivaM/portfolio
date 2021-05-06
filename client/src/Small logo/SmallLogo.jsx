import React from 'react';
import yelpLogo from '../HeroImages/yelpLogo.png'

const SmallLogo = () => {
    return (
        <div className="small-logo-title-container">
            <p className="small-logo-title">Jadiva</p>
            <img className="small-logo" src={yelpLogo} alt="logo of name Jadiva"/>
        </div>
    )
}

export default SmallLogo