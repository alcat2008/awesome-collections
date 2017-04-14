import React, { PropTypes } from 'react';
import { Modal } from 'antd-mobile';
import styles from './Card.module.less';
import Logo from './Logo.png';
import Tip from './Tip.png';

const { alert } = Modal;

const handleClick = () => {
  alert(null, (
    <div className={styles.message}>
      此余额非实时更新，以卡公司实际帐户余额为准
    </div>
  ), [
    { text: '我知道了' },
  ]);
};

export default function Card({ name, type, number, amount }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img role="presentation" className={styles.logo} src={Logo} />
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <span className={styles.type}>{type}</span>
        </div>
      </div>
      <div className={styles.footer}>
        {number &&
          <div className={styles.number}>
            No.{number}
          </div>
        }
        {amount &&
          <div className={styles.amount}>
            ￥{amount}
            <img role="presentation" onClick={handleClick} src={Tip} />
          </div>
        }
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  number: PropTypes.string,
  amount: PropTypes.string,
};
