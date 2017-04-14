import React from 'react';
import { Result, Button, Modal } from 'antd-mobile';
import styles from './ReturnResult.module.less';
import Clock from './Clock.png';

const { alert } = Modal;

export default class ReturnResult extends React.Component {
  handleCancel = () => {
    alert('撤回成功', '您可继续使用公交付款服务', [
      { text: '立即查看', onPress: () => (window.location.href = '/card_detail.html') },
    ]);
  }

  render() {
    return (
      <div className={styles.returnResult}>
        <Result
          className={styles.result}
          imgUrl={Clock}
          title="退卡申请已提交"
          message={
            <div className={styles.message}>
              <p>我们将在5个工作日内审核您的申请</p>
              <p>申请成功后卡内余额将退回您支付宝账户</p>
            </div>
          }
        />

        <div className={styles.cancelBtn}>
          <Button type="primary" onClick={this.handleCancel}>撤回申请</Button>
        </div>
      </div>
    );
  }
}
