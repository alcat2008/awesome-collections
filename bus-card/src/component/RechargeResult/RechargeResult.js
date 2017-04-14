import React from 'react';
import { Result } from 'antd-mobile';
import styles from './RechargeResult.module.less';
import Bus from '../../common/Bus.png';
import Alipay from '../../common/Alipay.png';

export default function RechargeResult() {
  return (
    <div>
      <Result
        className={styles.result}
        imgUrl={Alipay}
        title="充值成功"
        message={<div className={styles.message}>998.00</div>}
      />
      <div
        className={styles.autoRecharge}
        onClick={() => (window.location.href = '/auto_recharge_setup.html')}
      >
        <div className={styles.icon}>
          <img role="presentation" src={Bus} />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>自动充值</div>
          <div className={styles.footer}>出账自动扣款，省心省力</div>
        </div>
        <div className={styles.extra}>
          立即开通
          <div className={styles.arrow} />
        </div>
      </div>
    </div>
  );
}
