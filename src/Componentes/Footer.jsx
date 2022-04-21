import React from 'react'
import './Footer.css'
import Logo from '../img/01.jpg'


export default function Footer() {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3><img style={{ width: "75px", height: "75px", borderRadius: "35px" }} src={Logo} alt="" />Zeta Ross</h3>

                    <p className="footer-links">
                        <a className="mt-2 " href="#inicio">Item 1</a>
                        <br />
                        <a className="mt-2" href="#encuesta" blog>Item 2</a>
                        <br />
                        <a className="mt-2" href="#higene">Item 3</a>
                        <br />
                        <a className="mt-2" href="#control">Item 4</a>
                    </p>

                    <div className="footer-icons">

                        <a href=""><img style={{ width: "50px", height: "50px" }} src="https://icongr.am/fontawesome/facebook-official.svg?size=128&color=355bd0" alt="" /></a>
                        <a href="https://www.instagram.com/zeta.ross.3d/"><img style={{ width: "50px", height: "50px" }} src="https://icongr.am/fontawesome/instagram.svg?size=128&color=ff24f8" alt="" /></a>
                        <a href="https://api.whatsapp.com/send?phone=543816072290"><img style={{ width: "50px", height: "50px" }} src="https://icongr.am/fontawesome/whatsapp.svg?size=30&color=1dcd3b" alt="" /></a> 

                    </div>

                </div>

                <div className="footer-right">

                    <b><p className="mt-3">Direccion:</p></b> <br />
                    <p>Necochea 1827</p>

                    <div className="mapa-footer mt-2" action="#" method="post">

                        <a href="https://www.google.com/maps/place/Necochea+1827,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.8001,-65.2324,17z/data=!4m5!3m4!1s0x94225dac09847c3d:0x9201baa88b76667a!8m2!3d-26.800156!4d-65.2321181?hl=es"> <img className="mapa-img" style={{ width: "350px", height: "200px" }} src="https://img.lagaceta.com.ar/fotos/notas/2016/07/27/tmb1_691869_201607261953120000001.jpg" alt="" /> </a>

                    </div>

                </div>

            </footer>
        </div>
    )
}
