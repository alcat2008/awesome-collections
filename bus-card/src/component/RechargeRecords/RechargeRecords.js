import React from 'react';
import { ListView } from 'antd-mobile';
import Row from './Row';
import styles from './RechargeRecords.module.less';

const records = {
  '12月': [
    { id: 0, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 1, line: '杭州-506路', amount: '-4.00', time: '12-18 18:32' },
    { id: 2, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 3, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
  ],
  '11月': [
    { id: 4, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 5, line: '杭州-506路', amount: '-4.00', time: '12-18 18:32' },
    { id: 6, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 7, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
  ],
  '10月': [
    { id: 8, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 9, line: '杭州-506路', amount: '-4.00', time: '12-18 18:32' },
    { id: 10, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 11, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
  ],
  '9月': [
    { id: 12, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 13, line: '杭州-506路', amount: '-4.00', time: '12-18 18:32' },
    { id: 14, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 15, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
  ],
  '8月': [
    { id: 16, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 17, line: '杭州-506路', amount: '-4.00', time: '12-18 18:32' },
    { id: 18, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 19, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
  ],
};


export default class RechargeRecords extends React.Component {
  constructor(props) {
    super(props);

    const getSectionData = (dataBlob, sectionID) => sectionID;
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.dataBlob = {};
    this.sectionIDs = [];
    this.rowIDs = [];

    Object.keys(records).forEach((month, index) => {
      this.sectionIDs.push(month);
      this.dataBlob[month] = month;
      this.rowIDs[index] = [];

      records[month].forEach(record => {
        this.rowIDs[index].push(record.id);
        this.dataBlob[record.id] = record;
      });
    });

    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
    };
  }

  render() {
    return (
      <ListView
        className={styles.records}
        dataSource={this.state.dataSource}
        renderSectionHeader={
          (sectionData) => (<div className={styles.sectionHeader}>{sectionData}</div>)
        }
        renderRow={rowData => <Row record={rowData} />}
        scrollEventThrottle={20}
        onEndReachedThreshold={10}
        stickyHeader
        stickyProps={{
          stickyStyle: { zIndex: 999, WebkitTransform: 'none', transform: 'none' },
          // topOffset: -43,
        }}
      />
    );
  }
}
