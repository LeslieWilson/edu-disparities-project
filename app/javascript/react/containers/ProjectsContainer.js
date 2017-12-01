import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NateTile from '../components/NateTile'
import LeslieTile from '../components/LeslieTile'
import SergeTile from '../components/SergeTile'
import MariaTile from '../components/MariaTile'
import StephaneTile from '../components/StephaneTile'
const ProjectsContainer = props => {
  return(
    <div className="meta-container">
    <div className="projects-container">
      <div className="white-space">
      </div>
      <div className="title-container">
        <h1 className="contributor-title"> About Us </h1>
      </div>
      <LeslieTile />
      <MariaTile />
      <SergeTile />
      <NateTile />
      <StephaneTile />

    </div>
    </div>
  )
}

export default ProjectsContainer
