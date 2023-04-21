import React from 'react';
import logoPokemon from '../../img/logo-pokemon.png'
import './style.css';
import { Link, Outlet } from "react-router-dom"

function Navbar() {
    return (
      <>
        <nav className="Navbar">
          <Link to="/" className="logo">
          <img src={ logoPokemon } alt='pokeball'/>
          </Link>
          <Link to="/" className='about'>Home</Link>
          <Link to="/about" className='about'>About</Link>
         

        </nav>
        <Outlet></Outlet>
        </>
      )
}


export default Navbar;
