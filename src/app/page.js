'use client'

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Main from '@/components/main/Main'
import Rolling from '@/components/rolling/Rolling'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Banner from '@/components/banner/Banner';
import Form from '@/components/form/Form'

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 10, 100); // 每次增加 10%
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {progress < 100 ? (
        <div className={styles.loaderContainer}>
          <Image className={styles.logo} src='/logo-05.png' width={150} height={150} />
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${progress}%` }}></div>
          </div>
          <div className={styles.loadingText}>Loading...{progress}%</div>
        </div>
      ) : (
        <>
          <Header />
          <Banner />
          <Rolling />
          <Main />
          <Form />
          <Footer />
        </>
      )}
    </div>
  );
}
