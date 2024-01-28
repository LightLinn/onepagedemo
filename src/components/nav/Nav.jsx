'use client'

import React, { useState }  from 'react'
import Link from 'next/link'
import styles from '@/components/nav/nav.module.css'
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    console.log(navVisible)
    setNavVisible(!navVisible);
  };

  const closeNav = () => {
    setNavVisible(false);
  };

  return (
    <div>
      <div className={styles.navIcon} onClick={toggleNav}>
        Menu
      </div>

      <div className={styles.nav_pc}>
        <ul>
          <li><Link href="/">關於我們</Link></li>
          <li><Link href="/">服務項目</Link></li>
          <li><Link href="/">精選作品</Link></li>
          <li><Link href="/">立即聯絡</Link></li>
        </ul>
      </div>

      <AnimatePresence>
      {navVisible && (
        <div className={styles.nav}>
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
            <div className={styles.closeButton} onClick={toggleNav}>Ｘ</div>
              <ul>
                <li><Link href="/" onClick={toggleNav}>關於我們</Link></li>
                <li><Link href="/" onClick={toggleNav}>服務項目</Link></li>
                <li><Link href="/" onClick={toggleNav}>精選作品</Link></li>
                <li><Link href="/" onClick={toggleNav}>立即聯絡</Link></li>
              </ul>
          </motion.div>
        </div>
        )}
      </AnimatePresence> 
    </div>
  )
}

export default Nav