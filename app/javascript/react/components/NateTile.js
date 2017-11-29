import React from 'react'
import { Link } from 'react-router-dom'

const NateTile = props => {
  return(
    <div className="nate-tile">
      <h1>Nate Weeks</h1>
      <img className="nate-photo"src="https://i.imgur.com/DuVdVUnm.jpg" />
      <p> Ive acted as a mentor to leslie and serge helping them learn react and Ruby on Rails! Im a recent Launch Academy graduate and want to share my skills with others, and become a better teacher to help at-risk communities.</p>
      <a href="admistus.herokuapp.com">Nates Project!</a>
    </div>
  )
}

export default NateTile
