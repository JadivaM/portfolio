import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import yelpstars from '../YelpImages/yelp-stars.png';
import Projects from '../data/data';
import {Link} from 'react-router-dom';

const AllProjectCards = () => {


    return (
        <div className="all-projects-cards-container">
  {Projects.map((project) =>  {
    return (
      <Card variant="outlined" className="all-projects-cards">
      <CardContent className="all-projects-cards-information">
          <div className="all-projects-cards-image-container">
      <CardMedia
          component="img"
          alt={project.name}
          height="140"
          image={project.photo}
          title={project.name}
          className="all-projects-cards-image"
        />
        </div>
        <div className="all-projects-info-column">
      <Link
      to={{pathname: `${project.link}`}} target="_blank" style={{textDecoration: 'none', color: '#000'}}>
        <p className="all-projects-card-title">
          {project.name}
        </p>
      </Link>
        <img className="all-projects-card-stars" src={yelpstars} alt="red stars rating the project"/>
         <p className="all-projects-card-category">{project.filters}</p>
         <p className="all-projects-card-info">{project.info}</p>
        <div className="all-projects-card-view-website-container">
          <Link to={{pathname: `${project.link}`}} target="_blank" style={{textDecoration: 'none', color: '#000'}}>
                    <p className="all-projects-card-view-website-button">
                        View Website
                    </p>
                    </Link>
                    <p className="all-projects-card-view-website-caption">
                        See website for more info
                    </p>
        </div>
        </div>
      </CardContent>
     </Card> 
    )

  })}
        </div>
    )
}

export default AllProjectCards;