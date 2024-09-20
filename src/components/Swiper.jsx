import React from 'react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slidePhoto from '../assets/slide.png';

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
        style={{ width: 1000, borderRadius: 10 }}
        className="bg-transparent rounded-10 shadow-md h-[20%]"
      >
        <SwiperSlide>
          <img src={slidePhoto} alt="" className="w-full h-full object-cover rounded-10" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidePhoto} alt="" className="w-full h-full object-cover rounded-10" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent