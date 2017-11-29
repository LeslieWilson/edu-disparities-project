import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NateTile from '../components/NateTile'
import LeslieTile from '../components/LeslieTile'
import SergeTile from '../components/SergeTile'

const ProjectsContainer = props => {
  return(
    <div className="projects-container">
      <div className="white-space">
      </div>
      <div className="title-container">
        <h1 className="contributor-title"> About Us </h1>
      </div>
      <LeslieTile />
      <SergeTile />
      <NateTile />
    </div>
  )
}

export default ProjectsContainer
