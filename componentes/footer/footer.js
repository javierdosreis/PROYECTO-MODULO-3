import React from "react"
import "../../components/footer/footer.css"

function Footer() {
    return (
        <div>
            <div className="awesome" style={{ border: '1px solid red' }}>
                <footer>
                    <br />
                    <div id="redes">
                        <a href="www.youtube.com"><img src="https://cdn-icons-png.flaticon.com/128/733/733646.png" alt="" /></a>
                        <a href="www.twitter.com"><img src= "https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="" /></a>
                        <a href="www.instagram.com"><img src="https://cdn-icons-png.flaticon.com/128/87/87390.png" alt="" /></a>
                        <a href="www.facebook.com"><img src="https://cdn-icons.flaticon.com/png/128/4701/premium/4701482.png?token=exp=1638909374~hmac=9b4a429e908d0dd615082543e6c0b9ea" alt="" /></a>
                    </div>
                    <br />
                    <div id="text">
                        <p>Realizado en el 2021, Javier Dos Reis , Bruno Juayeck y Florencia Vera, para el Bootcamp de Matea.</p>
                    </div>
                    <br />
                    <br />
                </footer> 
            </div>
          
        </div>
    );
};

export default Footer