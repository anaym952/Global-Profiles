
import { NavBarItem } from "./NavBarItem"
import { Link, NavLink } from "react-router-dom"
import './Navbar.css'

import logo from './globalProfilesLogo.png';

export function Navbar() {

    return (
      <div className="navbar">
        <div className="navbar-logo">
            <Link to="/" className="logo-link">
              <ul>
                <li id="image"><img src={logo}></img></li>
                <li><h2>Global Profiles</h2></li>
              </ul>
            </Link>
          </div>
        <div className="navbar-menu">
          <ul className="navbar-menu-list">
            <NavLink to="/" className={(section)=> {return section.isActive ? "current-section nav-element":"nav-element"}}>Home</NavLink>
            <NavLink to="/about" className={(section)=> {return section.isActive ? "current-section nav-element":"nav-element"}}>About</NavLink>
            <NavLink to="/profiles" className={(section)=> {return section.isActive ? "current-section nav-element":"nav-element"}}>Profiles</NavLink>       
          </ul>
        </div>
      </div>
    )
}

