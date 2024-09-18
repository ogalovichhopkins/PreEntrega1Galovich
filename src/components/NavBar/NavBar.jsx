import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {


  return (
    <header>
        <Link to="/">
          <h1>EcoTienda</h1>
        </Link>
        
        <nav>
            <ul>
                <li>
                  <NavLink to="/">Todos</NavLink>  
                </li>
                <li>
                  <NavLink to="/categoria/aceites">Aceites</NavLink>   
                </li>
                <li>
                  <NavLink to="/categoria/galletas">Galletas</NavLink> 
                </li>
                <li>
                  <NavLink to="/categoria/panes">Panes</NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>
        

    </header>

  )
}

export default NavBar