import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../nav/Nav';
import styles from '@/components/header/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <motion.div className={styles.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className={styles.logo}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link href="/">
          <Image src='/logo-03.png' width={195} height={60} alt="Logo" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Nav />
      </motion.div>
    </motion.div>
  );
};

export default Header;
