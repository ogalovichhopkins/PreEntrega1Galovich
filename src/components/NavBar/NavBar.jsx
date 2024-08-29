import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {


  return (
    <header>
        <h1>EcoTienda</h1>

        <nav>
            <ul>
                <li>Todos</li>
                <li>Panes</li>
                <li>Postres</li>
                <li>Bebidas</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>

  )
}

export default NavBar