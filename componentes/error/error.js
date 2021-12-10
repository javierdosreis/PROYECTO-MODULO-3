import React from "react";
import "../../components/error/error.css"
import "../../components/navbar/navbar.css"



function Error() {
    return ( 
        <div>
        <nav>
          <div id="nav1">
            <p>PELICULAS</p>
          </div>
        </nav>
        <div>
          <div>
            <p> No se puede acceder al sitio sin autenticación </p>
          </div>
          <div>
            <button classname="btn btn-block login-button" type="submit"><i classname="fa fa-sign-in"> Volver al login </i></button><i classname="fa fa-sign-in"> <br /> <br />
            </i></div><i classname="fa fa-sign-in">
          </i></div><i classname="fa fa-sign-in">
        </i></div>
    );
    };

export default Error;