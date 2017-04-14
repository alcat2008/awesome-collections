import React, { PropTypes } from 'react';
import { List } from 'antd-mobile';
import cx from 'classnames';
import styles from './Receipts.module.less';

const { Item } = List;

export default function Row({ receipt }) {
  return (
    <Item>
      <div className={styles.row}>
        <div className={styles.section}>
          <div className={styles.line}>{receipt.line}</div>
          <div
            className={cx(styles.amount, { [styles.failed]: !receipt.type })}
          >
            {receipt.amount}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.time}>{receipt.time}</div>
          {receipt.type ? (
            <div className={styles.type}>扣款方式：{receipt.type}</div>
          ) : (
            <div className={styles.type}>扣款失败</div>
          )}
        </div>
      </div>
    </Item>
  );
}

Row.propTypes = {
  receipt: PropTypes.object.isRequired,
};
