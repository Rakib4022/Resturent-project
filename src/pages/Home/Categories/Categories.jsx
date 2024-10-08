import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../share/Sectiontitle/SectionTitle';



const Categories = () => {
    return (
        <div>
            <SectionTitle
                subheading={'From 11:00am to 10:00pm'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
            <div className='mb-10'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h2 className="text-3xl text-center text-white uppercase -mt-12">Salad</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h2 className="text-3xl text-center text-white uppercase -mt-12">Soups</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h2 className="text-3xl text-center text-white uppercase -mt-12">pizzas</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h2 className="text-3xl text-center text-white uppercase -mt-12">desserts</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h2 className="text-3xl text-center text-white uppercase -mt-12">Salad</h2>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Categories;