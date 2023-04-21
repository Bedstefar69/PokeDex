import React from 'react';
import logoPokemon from '../../img/logo-pokemon.png'
import './style.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Navbar() {
    return (
        <nav className="Navbar">
          <Link to="/" className="logo">
          <img src={ logoPokemon } alt='pokeball'/>

          </Link>
          <ul>
            <CustomLink className="about" to="/">Home</CustomLink>
          </ul>
          <ul>
            <CustomLink className="about" to="/About">About</CustomLink>
          </ul>
         
        </nav>
      )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default Navbar;
