import React from 'react';
import { List, Button, Toast } from 'antd-mobile';
import Card from '../Card/Card';
import styles from './AutoRechargeSetup.module.less';

const { Item } = List;

const enabled = new Date().getTime() % 2 === 0;

export default class AutoRechargeSetup extends React.Component {
  state = {
    editing: false,
  }

  handleEdit = () => {
    this.setState({ editing: true });
  }

  handleSubmit = () => {
    this.setState({ editing: false });
    Toast.info('修改成功');
  }

  handleOpen = () => {
    window.location.href = '/auto_recharge_result.html';
  }

  handleCancel = () => {
    window.location.href = '/recharge.html?cancel=success';
  }

  render() {
    const { editing } = this.state;

    let btns;

    if (!enabled) {
      if (editing) {
        btns = (
          <div className={styles.submitBtn}>
            <Button type="primary" onClick={this.handleSubmit}>确认</Button>
          </div>
        );
      } else {
        btns = (
          <div className={styles.editBtn}>
            <Button type="ghost" inline onClick={this.handleCancel}>取消自动充值</Button>
            <Button type="primary" onClick={this.handleEdit} inline>编辑充值额度</Button>
          </div>
        );
      }
    } else {
      btns = (
        <div className={styles.submitBtn}>
          <Button type="primary" onClick={this.handleOpen}>确认开通</Button>
        </div>
      );
    }

    return (
      <div>
        <Card
          name="杭州市电子公交卡"
          type="充值卡"
          number="0901201021"
          amount="45"
        />

        <List className={styles.actionList}>
          <Item
            extra={
              <select dir="rtl" disabled={!enabled && !editing}>
                <option value="10">10元</option>
                <option value="20">20元</option>
                <option value="30">30元</option>
              </select>
            }
            arrow="horizontal"
          >
            余额少于
          </Item>
          <Item
            extra={
              <select dir="rtl" disabled={!enabled && !editing}>
                <option value="10">10元</option>
                <option value="20">20元</option>
                <option value="30">30元</option>
                <option value="100">100元</option>
                <option value="200">200元</option>
                <option value="300">300元</option>
              </select>
            }
            arrow="horizontal"
          >
            充值金额
          </Item>
        </List>
        {btns}
      </div>
    );
  }
}
