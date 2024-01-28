'use client'

import styles from './banner.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';




const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.textSection}>
        <motion.div 
          initial={{ opacity: 0 }}  
          animate={{ opacity: 1 }}  
          transition={{ duration: 2 }}  
          >
          <h2 className={styles.title}>設計合適的解決方案</h2>
        </motion.div>
        <motion.div 
          initial={{ x: -100, opacity: 0 }}  
          animate={{ x: 0, opacity: 1 }}    
          transition={{ duration: 2 }}      
          >
          <p className={styles.content}>軟體開發、智能合約、網站架設，或是自動化業務流程，我們都能提供合適的技術與經驗。 現在就聯繫我們討論您的需求，看看我們如何幫助您實現願景。</p>
        </motion.div>
      </div>
      <div className={styles.imageSection}>
        <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div>
          <Image src="/01.jpg" alt="Image 1" width={600} height={400} layout="responsive"/>
        </div>
        <div>
          <Image src="/02.jpg" alt="Image 2" width={600} height={400} layout="responsive"/>
        </div>
        <div>
          <Image src="/03.jpg" alt="Image 3" width={600} height={400} layout="responsive"/>
        </div>
        <div>
          <Image src="/04.jpg" alt="Image 4" width={600} height={400} layout="responsive"/>
        </div>
        <div>
          <Image src="/05.jpg" alt="Image 5" width={600} height={400} layout="responsive"/>
        </div>
        <div>
          <Image src="/06.jpg" alt="Image 6" width={600} height={400} layout="responsive"/>
        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default Banner;
