import React from 'react'
import { Link } from 'react-router-dom'

const NateTile = props => {
  return(
    <div className="nate-tile">
      <h1 className = "tile-name">Nate Weeks</h1>
      <img className="nate-photo"src="https://i.imgur.com/DuVdVUnm.jpg" />
      <p className ="tile-content"> I have acted as a mentor for Resilient Coders who wished to learn React and Ruby on Rails and implement this project. Accessable science education is something I very much believe in. Thus over a few hour-long sessions per week, I have guided Leslie in her quest to create this React/Rails application, as she assists me with other projects I participate in. It has been a rewarding experience to watch this internet space be created. I am otherwise a Launch Academy graduate and want to share my back-end skills with others, and become a better teacher through practice.</p>
      <a className = "github-link" href="https://github.com/Nate-weeks">View Nates Github</a>
    </div>
  )
}

export default NateTile
