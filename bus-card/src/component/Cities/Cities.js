import React from 'react';
import { List } from 'antd-mobile';

const { Item } = List;

export default function Cities() {
  return (
    <List>
      <Item arrow="horizontal">杭州市</Item>
      <Item arrow="horizontal">晋江市</Item>
    </List>
  );
}
