import React from 'react';
import { Result } from 'antd-mobile';
import styles from './AutoRechargeResult.module.less';
import Alipay from '../../common/Alipay.png';

export default function AutoRechargeResult() {
  return (
    <Result
      className={styles.result}
      imgUrl={Alipay}
      title="开通成功"
      message={<div className={styles.message}>电子公交卡余额低于20元将自动充值50元</div>}
    />
  );
}
