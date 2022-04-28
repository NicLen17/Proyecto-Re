import { NavLink } from 'react-bootstrap'
import './Seccion404.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import React, { useEffect } from "react";

function Seccion404() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div data-aos="fade" className="celbody">
            <div className="celpantalla">
                <div className="cosascel">
                <img className="bateria" style={{ width: "25px", height: "25px" }} src="https://icongr.am/fontawesome/battery-3.svg?size=128&color=ffffff" alt="" />
                <img className="notificacion" style={{ width: "18px", height: "18px" }} src="https://icongr.am/fontawesome/bell.svg?size=128&color=ffffff" alt="" />
                <img className="blutetoh" style={{ width: "18px", height: "18px" }} src="https://icongr.am/fontawesome/bluetooth-b.svg?size=128&color=ffffff" alt="" />
                <img className="wifi" style={{ width: "18px", height: "18px" }} src="https://icongr.am/entypo/signal.svg?size=128&color=ffffff" alt="" />
                <img className="alarma" style={{ width: "18px", height: "18px" }} src="https://icongr.am/clarity/alarm-clock.svg?size=128&color=ffffff" alt="" />
                </div>
                <p style={{ fontSize: "55px" }}>O o p s...</p>
                <input className="inputcel" style={{ width: "250px", marginTop: "0px" }} type="text" placeholder="por ahi no es..." />
                <button>
                    <img style={{ width: "18px", height: "18px", marginLeft: "8px" }} src="https://icongr.am/fontawesome/search.svg?size=128&color=00000" alt="" />
                </button>
                <img style={{ marginTop: "15px" }} src="https://icongr.am/entypo/traffic-cone.svg?size=128&color=ff8c2e" alt="" />
                <p style={{ marginTop: "10px" }}>
                    No se encuentra la direccion a la que intentas acceder...
                </p>
                <p><b style={{marginBottom:"5px"}}>
                    Intenta con... 
                    <br />
                    <NavLink href="/"> <img style={{ width: "38px", height: "38px" }} src="https://icongr.am/clarity/house.svg?size=128&color=0040ff" alt="" /></NavLink>
                    <br />
                </b></p>
            </div>
            <img className="botoncel" style={{ width: "48px", height: "48px", marginTop: "5px" }}  src="https://icongr.am/clarity/play.svg?size=128&color=ffffff" alt="" />
        </div>
    )
}

export default Seccion404;
