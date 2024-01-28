'use client'

import React, { useState, useEffect }from 'react';
import Image from 'next/image';
import styles from "./main.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { motion } from 'framer-motion';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Main = () => {

  const [isVisible, setIsVisible] = useState(false);

  const checkIfVisible = () => {
    const element = document.getElementById('elementId'); // 確保給您的元素一個唯一的ID
    const rect = element.getBoundingClientRect();
    setIsVisible(rect.top <= window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkIfVisible);
    return () => {
      window.removeEventListener('scroll', checkIfVisible);
    };
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        淡入效果
      </motion.div>

      <Swiper
        className={styles.swiper}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className={styles.SwiperSlide}><Image src='/01.jpg' width={400} height={300} /></SwiperSlide>
        <SwiperSlide><Image src='/02.jpg' width={400} height={300} /></SwiperSlide>
        <SwiperSlide><Image src='/03.jpg' width={400} height={300} /></SwiperSlide>
        <SwiperSlide><Image src='/04.jpg' width={400} height={300} /></SwiperSlide>
        <SwiperSlide><Image src='/05.jpg' width={400} height={300} /></SwiperSlide>
        <SwiperSlide><Image src='/06.jpg' width={400} height={300} /></SwiperSlide>
      </Swiper>

      
      <motion.div
        id="elementId"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 3 }}
      >
        效果
    </motion.div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>

  )
}

export default Main