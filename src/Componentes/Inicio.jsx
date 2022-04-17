import './Inicio.css'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import './Carro.css'
import sample from '../img/sample.jpeg'


export default function Inicio() {
  return (
    <div>
      <div className="Carro-Cont">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper, Carro-Swip"
                >
                    <SwiperSlide><img className="CarroImg" src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></SwiperSlide>
                    <SwiperSlide><img className="CarroImg" src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></SwiperSlide>
                    <SwiperSlide><img className="CarroImg" src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></SwiperSlide>
                    <SwiperSlide><img className="CarroImg" src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></SwiperSlide>
                </Swiper>
            </div>
      <div className="Inicio">
        <div className='Titulo-inicio'>
          <h1>Productos populares</h1>
        </div>
        <div className='Carro-Inicio'>
        <Swiper
        slidesPerView={6}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper, Inicio-swip"
      >
        <SwiperSlide><img className='CarroI-Img' src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></SwiperSlide>
        <SwiperSlide><img className='CarroI-Img' src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></SwiperSlide>
        <SwiperSlide><img className='CarroI-Img' src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></SwiperSlide>
        <SwiperSlide><img className='CarroI-Img' src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></SwiperSlide>
        <SwiperSlide><img className='CarroI-Img' src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></SwiperSlide>
        <SwiperSlide><img className='CarroI-Img' src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></SwiperSlide>
        <SwiperSlide><img className='CarroI-Img' src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></SwiperSlide>
        <SwiperSlide><img className='CarroI-Img' src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></SwiperSlide>
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
