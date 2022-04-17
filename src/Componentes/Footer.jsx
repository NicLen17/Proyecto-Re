import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3><img style={{ width: "75px", height: "75px" }} src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /> Nombre empresa</h3>

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

                        <a href="https://www.facebook.com/groups/786867124845958"><img style={{ width: "50px", height: "50px" }} src="https://icongr.am/fontawesome/facebook-official.svg?size=128&color=355bd0" alt="" /></a>
                        <a href="https://www.instagram.com/municipalidad_de_tafiviejo/"><img style={{ width: "50px", height: "50px" }} src="https://icongr.am/fontawesome/instagram.svg?size=128&color=ff24f8" alt="" /></a>
                        <a href="https://api.whatsapp.com/send?phone=543816776773"><img style={{ width: "50px", height: "50px" }} src="https://icongr.am/fontawesome/whatsapp.svg?size=30&color=1dcd3b" alt="" /></a> 

                    </div>

                </div>

                <div className="footer-right">

                    <b><p className="mt-3">Direccion:</p></b> <br />
                    <p>para completar Direccion, mapa de ejemplo</p>

                    <div className="mapa-footer mt-2" action="#" method="post">

                        <a href="https://www.google.com/maps/dir//ciat/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x942267d0c9f80ef9:0xfa4368d9221d0fef?sa=X&ved=2ahUKEwinosui3trzAhVxqZUCHey0AbIQ9Rd6BAhfEAM"> <img className="mapa-img" style={{ width: "350px", height: "200px" }} src="https://img.lagaceta.com.ar/fotos/notas/2016/07/27/tmb1_691869_201607261953120000001.jpg" alt="" /> </a>

                    </div>

                </div>

            </footer>
        </div>
    )
}
