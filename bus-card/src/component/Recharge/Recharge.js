import React from 'react';
import { InputItem, Flex, Button, Toast } from 'antd-mobile';
import Media from 'react-media';
import cx from 'classnames';
import styles from './Recharge.module.less';

export default class Recharge extends React.Component {
  componentDidMount() {
    const params = location.search.slice(1).split('&').reduce((acc, param) => {
      const [key, value] = param.split('=');
      return { ...acc, [key]: value };
    }, {});
    if (params.cancel === 'success') {
      Toast.info('取消成功');
    }
  }

  handleClick = () => {
    window.location.href = '/recharge_result.html';
  }

  render() {
    return (
      <div>
        <div className={styles.numberInput}>
          <label>充值卡号：</label>
          <InputItem type="number" defaultValue="09102910291" />
        </div>

        <Media query="(max-width: 640px)">
          {matches => (
            <div className={styles.selection}>
              <Flex className={styles.group} wrap="wrap" justify="between">
                {['10元', '20元', '30元'].map(amount => (
                  <Button
                    key={amount}
                    className={cx(styles.option, { [styles.small]: matches })}
                    type="ghost"
                    inline
                    onClick={this.handleClick}
                  >
                    {amount}
                  </Button>
                ))}
              </Flex>
              <Flex className={styles.group} wrap="wrap" justify="between">
                {['100元', '200元', '300元'].map(amount => (
                  <Button
                    key={amount}
                    className={cx(styles.option, { [styles.small]: matches })}
                    type="ghost"
                    inline
                    onClick={this.handleClick}
                  >
                    {amount}
                  </Button>
                ))}
              </Flex>
            </div>
          )}
        </Media>

        <div className={styles.footer}>
          <a href="/auto_recharge_setup.html">自动充值</a>
          <span className={styles.divider} />
          <a href="/recharge_records.html">充值记录</a>
        </div>
      </div>
    );
  }
}
