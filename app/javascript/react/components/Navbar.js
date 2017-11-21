import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

const Navbar = props => {
  return(
    <nav className="navbar">
      <Link className="home-page" to="/">Home</Link>
      <Link className="school-map" to="/school-map">School Map</Link>
      <Link className="forum" to="/forum">Forum</Link>
      <h1 className="menu">Menu</h1>
    </nav>
  )
}

export default Navbar
