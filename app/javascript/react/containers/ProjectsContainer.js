import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NateTile from '../components/NateTile'
import LeslieTile from '../components/LeslieTile'

const ProjectsContainer = props => {
  return(
    <div className="projects-container">
      <div className="white-space">
      </div>
      <div className="title-container">
        <h1 className="contributor-title"> Some info about our awesome contributors! </h1>
      </div>
      <LeslieTile />
      <NateTile />
    </div>
  )
}

export default ProjectsContainer
