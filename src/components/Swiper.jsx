import React from 'react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slidePhotoFirst from '../assets/slide.png';
import slidePhotoSecond from '../assets/slide2.jpg';
import slidePhotoMobileFirst from '../assets/slide_phone.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperComponent = () => {
  return (
    <div className='w-full flex'>
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        pagination={{
          clickable: true
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{ width: 1100, borderRadius: 15 }}
        className="bg-transparent rounded-10 shadow-md h-[20%]"
      >
        <SwiperSlide>
          <div className="hidden lg:block">
            <a href="tel:+998712303399">
              <img src={slidePhotoFirst} alt="" className="w-full h-full object-cover rounded-10" />
            </a>
          </div>
          <div className="block lg:hidden">
            <a href="tel:+998712303399">
              <img src={slidePhotoMobileFirst} alt="" className="w-full h-full object-cover rounded-10" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hidden lg:block">
            <a href="tel:+998712303399">
              <img src={slidePhotoSecond} alt="" className="w-full h-full object-cover rounded-10" />
            </a>
          </div>
          <div className="block lg:hidden">
            <a href="tel:+998712303399">
              <img src={slidePhotoMobileFirst} alt="" className="w-full h-full object-cover rounded-10" />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent