import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/footer/footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.upperFooter}>
            <Image src='/logo-01.png' width={150} height={150} />
            <p>聯絡電話: <Link href='tel: 0917000120'>0917000120</Link></p>
            <p>電子信箱: <Link href='mailto: tcstudio2022@gmail.com'>tcstudio2022@gmail.com</Link></p>
        </div>
        <div className={styles.lowerFooter}>
            <Link href="/">
                雷霆創造有限公司
            </Link>
        </div>
    </div>
  )
}

export default Footer