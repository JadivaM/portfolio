import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import yelpstars from '../YelpImages/yelp-stars.png';
import Projects from '../data/data.json';

const ProjectCards = () => {
    return (
        <div className="home-project-cards-container">
  {Projects.map((project) =>  {
    return (
      <Card variant="outlined" className="project-cards">
      <CardContent>
        <p className="project-card-title">
          {project.name}
        </p>
        <img className="project-card-stars" src={yelpstars} alt="red stars rating the project"/>
         <p className="project-card-category">{project.desc}</p>
        <p className="project-card-location">
         {project.location}
        </p>
      </CardContent>
     </Card> 
    )

  })}
        </div>
    )
}

export default ProjectCards
