import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './Carro.css'
import sample from '../img/sample.jpeg'

export default function Carro() {
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
        </div>
    )
}
