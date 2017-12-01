import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

const Navbar = props => {
  return(
    <nav className="navbar">
      <Link className="home-page" to="/">Home</Link>
      <Link className="school-map" to="/school-map">Curriculum Search-Engine</Link>
      <Link className="forum" to="/forum">Forum</Link>
      <Link className="menu" to="/about">About Us</Link>
    </nav>
  )
}

export default Navbar
