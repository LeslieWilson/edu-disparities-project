import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

const Navbar = props => {
  return(
    <nav className="navbar">
      <Link className="home-page" to="/">Super Cool Name</Link>
      <Link className="school-map" to="/school-map">School Map</Link>
      <Link className="forum" to="/forum">Forum</Link>
      <h1 className="menu">Menu button</h1>
    </nav>
  )
}

export default Navbar
