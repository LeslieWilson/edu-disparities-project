import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

const Footer = props => {
  return(
    <nav className="footer">
      <Link className="home-page" to="/">Home</Link>
      <Link className="school-map" to="/school-map">Science Curriculum Search-Engine</Link>
      <Link className="forum" to="/forum">Forum</Link>
      <Link className="menu" to="/about">About Us</Link>
    </nav>
  )
}

export default Footer
