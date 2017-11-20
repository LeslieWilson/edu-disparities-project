import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const TitlePage = props => {
  return (
    <div className="title">
      <div className="title-text">
      <h1 className="description-text"> Placeholder Title Text</h1>
      <Link to="about">Our Projects</Link>
      </div>
    </div>
  )
}

export default TitlePage
