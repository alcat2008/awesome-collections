import React from 'react';
import styles from './RechargeRecords.module.less';
import Bus from '../../common/Bus.png';

export default function Row() {
  return (
    <div className={styles.row}>
      <div className={styles.date}>
        <div className={styles.day}>今天</div>
        <div className={styles.time}>10:20</div>
      </div>
      <div className={styles.logo}>
        <img role="presentation" src={Bus} />
      </div>
      <div className={styles.info}>
        <div className={styles.amount}>100.00</div>
        <div className={styles.number}>充值 - 09102910291</div>
      </div>
    </div>
  );
}
