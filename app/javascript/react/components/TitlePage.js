
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';


const TitlePage = props => {
  return (


    <div className="title">
    <div className="videoOverlay">


  <Iframe url="https://www.youtube.com/embed/u1JfUvEPWwY"

            width="60%"
            height="60%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen/></div>

      <div className="title-text">
      <h1 className="description-text"> Placeholder Title Text</h1>
      <Link to="about">Our Projects</Link>
      </div>
    </div>
  )
}

export default TitlePage
