import React from 'react';
import { List, InputItem, Button, Modal, Toast } from 'antd-mobile';
import Card from '../Card/Card';
import styles from './GetCard.module.less';

const { alert } = Modal;

export default class GetCard extends React.Component {
  state = {
    codeSeconds: 0,
  }

  handleCodeHelp = () => {
    alert(null, (
      <div className={styles.codeHelp}>
        验证码收不到的提示文案验证码收不到的提示文案验证码收不到的提示文案验证码收不到的提示文案验证码收不到的提示文案验证码收不到的提示文案验证码收不到的提示文案。
      </div>
    ), [
      { text: '我知道了' },
    ]);
  }

  handleCodeSend = () => {
    Toast.info('验证码已发送');
    this.codeCountDown(true);
    this.codeCountInterval = setInterval(this.codeCountDown, 1000);
  }

  handleFinish = () => {
    // 获取公交卡
  }

  codeCountDown = (start = false) => {
    const { codeSeconds } = this.state;
    const seconds = start ? 60 : codeSeconds - 1;
    if (seconds === 0) {
      clearInterval(this.codeCountInterval);
    }
    this.setState({ codeSeconds: seconds });
  }

  render() {
    const { codeSeconds } = this.state;

    const codeBtn = codeSeconds === 0 ? (
      <Button type="ghost" size="small" inline onClick={this.handleCodeSend}>发送验证码</Button>
    ) : (
      <Button disabled size="small" inline>{codeSeconds}秒后重新发送</Button>
    );

    return (
      <div>
        <Card
          name="杭州市电子公交卡"
          type="充值卡"
        />

        <div className={styles.message}>
          该电子卡为实名卡，请核对您的实名信息
        </div>

        <List
          className={styles.formList}
          renderFooter={<span onClick={this.handleCodeHelp}>收不到验证码</span>}
        >
          <InputItem defaultValue="*鑫" disabled>姓名</InputItem>
          <InputItem defaultValue="4643304989848202" disabled>身份证号</InputItem>
          <InputItem defaultValue="18665944934" type="number">手机号码</InputItem>
          <InputItem
            placeholder="输入验证码"
            extra={codeBtn}
          >
            验证码
          </InputItem>
        </List>

        <div className={styles.submitBtn}>
          <Button type="primary" onClick={this.handleFinish}>完成</Button>
        </div>
      </div>
    );
  }
}
