import './Inicio.css'
import React, { useEffect, useState } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, EffectCoverflow, Autoplay } from "swiper";
import './Carro.css'
import Tarjeta from '../img/terjeta personal 1.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"
import axios from 'axios';
import "swiper/css/effect-coverflow";
import { Link, NavLink } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

export default function Inicio() {
  const [cargador, setCargador] = useState(false);

  useEffect(() => {
    setCargador(true)
    setTimeout(() => {
      setCargador(false)
    }, 1350);
  }, [])

  const [products, setProducts] = useState([]);
  const sliceproducts = products.slice(-7)
  useEffect(() => {
    const productos = async () => {
      const { data } = await axios.get("/productos");
      setProducts(data);
    };
    productos()

    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div data-aos="fade-up" className="Carro-Cont">
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper, Carro-Swip"
        >
          <SwiperSlide><img className="CarroImg" src={Tarjeta} alt="" /></SwiperSlide>
          <SwiperSlide><img className="CarroImg" src="https://i0.wp.com/www.latinamerica.tech/wp-content/uploads/2019/07/3d-printer-3311587_1280.png?fit=1280%2C720" alt="" /></SwiperSlide>
          <SwiperSlide><img className="CarroImg" src="http://tresdpro.com/wp-content/uploads/2018/09/impresoras-3d-metal.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="CarroImg" src="https://creatorium3d.com/wp-content/uploads/2021/03/impresora-3d-imprimiendo-filamentio-PLA.png" alt="" /></SwiperSlide>
        </Swiper>
      </div>
      <div className="Inicio">
        <div data-aos="fade-right" className='Titulo-inicio'>
          <h1>Agregados recientemente</h1>
        </div>
        <div data-aos="fade-up" className="Carro-Inicio">
        {
  cargador ? 
  
  <Spinner className='mt-5 Cargador-productos' animation="border" variant="danger" />

  :

  <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 40,
            stretch: 50,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          }}
          slidesPerView={3}
          spaceBetween={10}
          grabCursor={false}
          loop={true}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
          className="mySwiper, Inicio-swip"
        >
            {sliceproducts.map((prod) => {
              return (prod && (
                <SwiperSlide><img className='CarroI-Img' src={prod.img} alt="inicio-imgs" /></SwiperSlide>
              )
              );
            })}
        </Swiper>
}
      </div>
        <div className='Titulo-inicio'>
          <h1>Categorias</h1>
        </div>
        <div className='Inicio-Cards'>
          <div className='CardI'>
          <NavLink style={{ textDecoration: "none"}} as={Link} to="/productos/figuras">
            <Card className='CardI-style'>
              <Card.Img className='CardI-img' variant="top" src="https://i.ytimg.com/vi/C4HAJ5HLuB4/maxresdefault.jpg" />
              <Card.Body>
                <Card.Title style={{marginTop: "15px"}}>Figuras</Card.Title>
              </Card.Body>
            </Card>
            </NavLink>
          </div>
          <div className='CardI'>
          <NavLink style={{ textDecoration: "none"}} as={Link} to="/productos/decoracion">
            <Card className='CardI-style'>
              <Card.Img className='CardI-img' variant="top" src="https://i.pinimg.com/originals/de/c7/58/dec758df84f22775856177e44c116653.png" />
              <Card.Body>
                <Card.Title style={{marginTop: "15px"}}>Decoracion</Card.Title>
              </Card.Body>
            </Card>
            </NavLink>
          </div>
          <div className='CardI'>
          <NavLink style={{ textDecoration: "none"}} as={Link} to="/productos/disenos">
            <Card className='CardI-style'>
              <Card.Img className='CardI-img' variant="top" src="https://wobpress.files.wordpress.com/2014/08/43283_24-impresora3d.jpeg" />
              <Card.Body>
                <Card.Title style={{marginTop: "15px"}}>Diseños de piezas</Card.Title>
              </Card.Body>
            </Card>
            </NavLink>
          </div>
          <div className='CardI'>
          <NavLink style={{ textDecoration: "none"}} as={Link} to="/productos/pokemon">
            <Card className='CardI-style'>
              <Card.Img className='CardI-img' variant="top" src="https://images.cults3d.com/52-LfRJzOJaIb7U7Ra6r0QJQcJo=/https://files.cults3d.com/uploads/collection/shot_es/19/Pokemon_3D_printing_fichier_3D_stl_files_cults_3d_printer_imprimante_3D.jpg" />
              <Card.Body>
                <Card.Title style={{marginTop: "15px"}}>Pokemons</Card.Title>
              </Card.Body>
            </Card>
            </NavLink>
          </div>
          <div className='CardI'>
          <NavLink style={{ textDecoration: "none"}} as={Link} to="/productos/llaveros">
            <Card className='CardI-style'>
              <Card.Img className='CardI-img' variant="top" src="https://images.cults3d.com/BU_isbYQcHMOoF7NM0ttpysUxcs=/https://files.cults3d.com/uploaders/1748905/illustration-file/1449805546-1030-0631/Superheroes_keychains.jpg" />
              <Card.Body>
                <Card.Title style={{marginTop: "15px"}}>Llaveros</Card.Title>
              </Card.Body>
            </Card>
            </NavLink>
          </div>
          <div className='CardI'>
            <NavLink style={{ textDecoration: "none"}} as={Link} to="/productos/otros">
            <Card className='CardI-style'>
              <Card.Img className='CardI-img' variant="top" src="https://thumbs.dreamstime.com/b/icono-del-signo-m%C3%A1s-s%C3%ADmbolo-positivo-117088500.jpg" />
              <Card.Body>
                <Card.Title style={{marginTop: "15px"}}>Otros</Card.Title>
              </Card.Body>
            </Card>
            </NavLink>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}
