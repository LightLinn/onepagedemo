'use client'

import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import styles from '@/components/rolling/rolling.module.css'

const Rolling = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.rollingContainer}>
      <div className={styles.leftContainer}>
        <h3>成績展示</h3>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.numberContainer}>
          <h4 className={styles.numberTitle}>服務案件</h4>
          <p className={styles.numberContent}>
            <VisibilitySensor
              onChange={(isVisible) => {
                if (isVisible) {
                  setVisible(true);
                }
              }}
              offset={{ top: 10 }}
              delayedCall
              >
              <CountUp end={visible ? 100 : 0} duration={2.75} />
            </VisibilitySensor>
            +
          </p>
        </div>
        <div className={styles.numberContainer}>
          <h4 className={styles.numberTitle}>模板數量</h4>
          <p className={styles.numberContent}>
            <VisibilitySensor
              onChange={(isVisible) => {
                if (isVisible) {
                  setVisible(true);
                }
              }}
              offset={{ top: 10 }}
              delayedCall
              >
              <CountUp end={visible ? 200 : 0} duration={2.75} />
            </VisibilitySensor>
            +
          </p>
        </div>
        <div className={styles.numberContainer}>
          <h4 className={styles.numberTitle}>執行預算</h4>
          <p className={styles.numberContent}>
            <VisibilitySensor
              onChange={(isVisible) => {
                if (isVisible) {
                  setVisible(true);
                }
              }}
              offset={{ top: 10 }}
              delayedCall
              >
              <CountUp end={visible ? 300 : 0} duration={2.75} />
            </VisibilitySensor>
            +
          </p>
        </div>
      </div>
    </div>
  )
}

export default Rolling