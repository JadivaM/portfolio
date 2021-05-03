import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import yelpstars from '../YelpImages/yelp-stars.png';

const ProjectCards = () => {
    return (
        <div>
        <Card variant="outlined">
      <CardContent>
        <p className="project-card-title">
          Hangry Recipes
        </p>
        <img className="project-card-stars" src={yelpstars} alt="red stars rating the project"/>
         <p className="project-card-category">Recipes</p>
        <p className="project-card-location">
        Miami, FL
        </p>
      </CardContent>
    </Card> 
        </div>
    )
}

export default ProjectCards
