import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import Products from './Products';

function Collection({ item1, activeTab }) {
return (
    <div className="colItem">
    <Swiper
        slidesPerView={3}
        spaceBetween={10}
        scrollbar={{ draggable: true }}
        modules={[Scrollbar]}
    >
        {item1.slice((activeTab - 1) * 9, activeTab * 9).map((ele, i) => (
        <SwiperSlide key={ele.id}>
            <Products item1={ele} i={i} key={ele.id} />
        </SwiperSlide>
        ))}
    </Swiper>
    </div>
);
}

export default Collection;