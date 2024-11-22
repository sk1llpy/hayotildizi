import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Album = () => {
  const photos = [
    'https://via.placeholder.com/300x200?text=Photo+1',
    'https://via.placeholder.com/300x200?text=Photo+2',
    'https://via.placeholder.com/300x200?text=Photo+3',
    'https://via.placeholder.com/300x200?text=Photo+4',
    'https://via.placeholder.com/300x200?text=Photo+5',
  ];

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Album;
