'use client'

import React, { useState, useEffect } from 'react'
import styles from './main.module.css'
import Image from "next/image";
import VisibilitySensor from 'react-visibility-sensor';
import { motion, AnimatePresence } from 'framer-motion';

const Main = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div id='service' className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          服務項目
        </h1>
        <p className={styles.desc}>
        我們致力於提供卓越的客戶服務和支持，我們相信在每個項目中都應保持公開透明的溝通。
        我們的目標是成為客戶值得信賴的合作夥伴並幫助他們取得成功。 
        因此，無論您是在尋找網站或軟體的解決方案，還是想通過智能合約自動化您的業務流程，
        我們都能提供幫助的技能和經驗。了解我們能為您提供的服務，看看我們如何幫助您實現願景。
        </p>
      </div>
      <div className={styles.items}>
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible && !visible) {
              setVisible(true);
            }
          }}
          offset={{ top: 10 }}
          delayedCall
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.item}>
              <div className={styles.icon}>
                <Image src='/service.png' width={50} height={50} alt='icon'className={styles.icon}/>
              </div>
              <div className={styles.itemTextContainer}>
                <h3 className={styles.itemTitle}>
                  視覺介面設計
                </h3>
                <p className={styles.itemDesc}>
                  由專業設計師製作使用者介面，打造最適合您，精美與體驗兼具的設計
                </p>
              </div>
            </div>
          </motion.div>
        </VisibilitySensor>
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible && !visible) {
              setVisible(true);
            }
          }}
          offset={{ top: 10 }}
          delayedCall
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.item}>
              <div className={styles.icon}>
                <Image src='/service.png' width={50} height={50} alt='icon'className={styles.icon}/>
              </div>
              <div className={styles.itemTextContainer}>
                <h3 className={styles.itemTitle}>
                  視覺介面設計
                </h3>
                <p className={styles.itemDesc}>
                  由專業設計師製作使用者介面，打造最適合您，精美與體驗兼具的設計
                </p>
              </div>
            </div>
          </motion.div>
        </VisibilitySensor>
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible && !visible) {
              setVisible(true);
            }
          }}
          offset={{ top: 10 }}
          delayedCall
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.item}>
              <div className={styles.icon}>
                <Image src='/service.png' width={50} height={50} alt='icon'className={styles.icon}/>
              </div>
              <div className={styles.itemTextContainer}>
                <h3 className={styles.itemTitle}>
                  視覺介面設計
                </h3>
                <p className={styles.itemDesc}>
                  由專業設計師製作使用者介面，打造最適合您，精美與體驗兼具的設計
                </p>
              </div>
            </div>
          </motion.div>
        </VisibilitySensor>
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible && !visible) {
              setVisible(true);
            }
          }}
          offset={{ top: 10 }}
          delayedCall
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.item}>
              <div className={styles.icon}>
                <Image src='/service.png' width={50} height={50} alt='icon'className={styles.icon}/>
              </div>
              <div className={styles.itemTextContainer}>
                <h3 className={styles.itemTitle}>
                  視覺介面設計
                </h3>
                <p className={styles.itemDesc}>
                  由專業設計師製作使用者介面，打造最適合您，精美與體驗兼具的設計
                </p>
              </div>
            </div>
          </motion.div>
        </VisibilitySensor>
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible && !visible) {
              setVisible(true);
            }
          }}
          offset={{ top: 10 }}
          delayedCall
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.item}>
              <div className={styles.icon}>
                <Image src='/service.png' width={50} height={50} alt='icon'className={styles.icon}/>
              </div>
              <div className={styles.itemTextContainer}>
                <h3 className={styles.itemTitle}>
                  視覺介面設計
                </h3>
                <p className={styles.itemDesc}>
                  由專業設計師製作使用者介面，打造最適合您，精美與體驗兼具的設計
                </p>
              </div>
            </div>
          </motion.div>
        </VisibilitySensor>
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible && !visible) {
              setVisible(true);
            }
          }}
          offset={{ top: 10 }}
          delayedCall
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.item}>
              <div className={styles.icon}>
                <Image src='/service.png' width={50} height={50} alt='icon'className={styles.icon}/>
              </div>
              <div className={styles.itemTextContainer}>
                <h3 className={styles.itemTitle}>
                  視覺介面設計
                </h3>
                <p className={styles.itemDesc}>
                  由專業設計師製作使用者介面，打造最適合您，精美與體驗兼具的設計
                </p>
              </div>
            </div>
          </motion.div>
        </VisibilitySensor>
      </div>
    </div>
  )
}

export default Main