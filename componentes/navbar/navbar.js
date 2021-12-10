import React from "react";
import "./navbar.css"

import carrito from "../../img/carrito.png"
import estrella from "../../img/estrella.png"
import usuario from "../../img/usuario.png"

export default function navbar() {
    return (
        <nav>
            <div id="nav1">
                <p>PELICULAS</p>
            </div>
            <div id="nav2">
                <a href="PAGINA"><img src={carrito} alt="" /></a>
                <a href="PAGINA"><img src={estrella} alt="" /></a>
                <a href="PAGINA"><img src={usuario} alt="" /></a>
            </div>
        </nav>
    )
}



