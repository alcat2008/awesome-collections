import React from 'react';
import { List, Modal } from 'antd-mobile';
import cx from 'classnames';
import Card from '../Card/Card';
import styles from './CardDetail.module.less';

const { Item } = List;
const { alert } = Modal;

export default class CardDetail extends React.Component {
  handleReturn = () => {
    const returned = new Date().getTime() % 2 === 0;
    if (!returned) {
      alert(null, (
        <div className={cx(styles.message, styles.returnNotice)}>
          退卡后您将不能再享受刷手机乘公交的便捷服务。
        </div>
      ), [
        {
          text: '残忍退卡',
          onPress: () => (window.location.href = '/return_result.html'),
          style: { color: '#108ee9' },
        },
        { text: '我再想想' },
      ]);
    } else {
      alert(null, (
        <div className={styles.message}>
          <p>
            您的退卡申请已提交
          </p>
          <p>
            正在审核中
          </p>
        </div>
      ), [
        { text: '我知道了', style: { color: '#108ee9' } },
        { text: '查看进度', onPress: () => (window.location.href = '/return_result.html') },
      ]);
    }
  }

  render() {
    return (
      <div>
        <Card
          name="杭州市电子公交卡"
          type="充值卡"
          number="0901201021"
          amount="45"
        />

        <List className={styles.actionList}>
          <Item extra="充值卡">卡类型</Item>
          <Item
            arrow="horizontal"
            onClick={() => (window.location.href = '/recharge.html')}
          >
            卡片充值
          </Item>
          <Item
            extra="余额低于20元自动充值"
            arrow="horizontal"
            onClick={() => (window.location.href = '/auto_recharge_setup.html')}
          >
            自动充值
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => (window.location.href = '/receipts.html')}
          >
            乘车记录
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => (window.location.href = '/cities.html')}
          >
            开通城市
          </Item>
          <Item arrow="horizontal" onClick={this.handleReturn}>退卡申请</Item>
        </List>
      </div>
    );
  }
}
