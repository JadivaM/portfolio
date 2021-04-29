import React, {useState, useEffect} from 'react';
import heroImage1 from '../HeroImages/hero-image-1.jpg';
import heroImage2 from '../HeroImages/hero-image-2.jpg';
import heroImage3 from '../HeroImages/hero-image-3.jpg';
import heroImage4 from '../HeroImages/hero-image-4.jpg';
import heroImage5 from '../HeroImages/hero-image-5.jpg';
import heroImage6 from '../HeroImages/hero-image-6.jpg';
import heroImage7 from '../HeroImages/hero-image-7.jpg';
import heroImage8 from '../HeroImages/hero-image-8.jpg';
import heroImage9 from '../HeroImages/hero-image-9.jpg';
import heroImage10 from '../HeroImages/hero-image-10.jpg';
import heroImage11 from '../HeroImages/hero-image-11.jpg';
import heroImage12 from '../HeroImages/hero-image-12.jpg';
import heroImage13 from '../HeroImages/hero-image-13.jpg';
import heroImage14 from '../HeroImages/hero-image-14.jpg';
import heroImage15 from '../HeroImages/hero-image-15.jpg';
import heroImage16 from '../HeroImages/hero-image-16.jpg';
import heroImage17 from '../HeroImages/hero-image-17.jpg';

const HeroSection = () => {

const [heroImage, setHeroImage] = useState()

const setBackgroundImage = () => {
    const images = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5, heroImage6, heroImage7, heroImage8, heroImage9,heroImage10, heroImage11, heroImage12, heroImage13, heroImage14, heroImage15, heroImage16, heroImage17];
    const index = Math.floor(Math.random() * images.length);
    const randomImage = images[index];
    setHeroImage(randomImage);
    console.log('set!');
}
 
useEffect(() => {
    setBackgroundImage();
}, [])

    return (
        <div>
            <img src={heroImage} alt="computer science and coding languages on a computer screen" className="home-page-hero-image"/>
        </div>
    )
}

export default HeroSection;
