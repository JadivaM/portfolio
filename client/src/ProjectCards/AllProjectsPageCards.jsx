import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import yelpstars from '../YelpImages/yelp-stars.png';
import Projects from '../data/data.json';
import {Link} from 'react-router-dom';

const AllProjectCards = () => {


    return (
        <div className="home-project-cards-container">
  {Projects.map((project) =>  {
    return (
      <Card variant="outlined" className="all-project-cards">
      <CardContent>
      <Link
      to={{pathname: `${project.link}`}} target="_blank" style={{textDecoration: 'none'}}>
        <p className="all-project-card-title">
          {project.name}
        </p>
      </Link>
        <img className="all-project-card-stars" src={yelpstars} alt="red stars rating the project"/>
         <p className="all-project-card-category">{project.desc}</p>
        <p className="all-project-card-location">
         {project.location}
        </p>
      </CardContent>
     </Card> 
    )

  })}
        </div>
    )
}

export default AllProjectCards;