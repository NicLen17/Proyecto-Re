import './Inicio.css'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import './Carro.css'
import sample from '../img/sample.jpeg'
import Tarjeta from '../img/terjeta personal 1.jpg'
import Cara from '../img/01.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"
import axios from 'axios';

export default function Inicio() {
  const [products, setProducts] = useState([]);

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
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
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
        <div className='Carro-Inicio'>
          <Swiper
            slidesPerView={6}
            spaceBetween={0}
            loop={true}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper, Inicio-swip"
          >
            {products.map((prod) => {
              return (prod && (
                <SwiperSlide><img className='CarroI-Img' src={prod.img[0]} alt="" /></SwiperSlide>
              )
              );
            })}
          </Swiper>
        </div>
        <div className='Titulo-inicio'>
          <h1>Categorias</h1>
        </div>
        <div className='Inicio-Cards'>
          <div className='CardI'>
            <Card className='CardI-style'>
              <Card.Img className='CardI-img' variant="top" src="https://w7.pngwing.com/pngs/554/591/png-transparent-computer-icons-product-sample-tally-miscellaneous-text-service-thumbnail.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className='CardI'>
            <Card className='CardI-style'>
              <Card.Img className='CardI-img' variant="top" src="https://w7.pngwing.com/pngs/554/591/png-transparent-computer-icons-product-sample-tally-miscellaneous-text-service-thumbnail.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className='CardI'>
            <Card className='CardI-style'>
              <Card.Img className='CardI-img' variant="top" src="https://w7.pngwing.com/pngs/554/591/png-transparent-computer-icons-product-sample-tally-miscellaneous-text-service-thumbnail.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className='CardI'>
            <Card className='CardI-style'>
              <Card.Img className='CardI-img' variant="top" src="https://w7.pngwing.com/pngs/554/591/png-transparent-computer-icons-product-sample-tally-miscellaneous-text-service-thumbnail.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
