import React from 'react';
import { ListView } from 'antd-mobile';
import Row from './Row';
import styles from './Receipts.module.less';

const receipts = {
  12: [
    { id: 0, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 1, line: '杭州-506路', amount: '-4.00', time: '12-18 18:32' },
    { id: 2, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 3, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
  ],
  11: [
    { id: 4, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 5, line: '杭州-506路', amount: '-4.00', time: '12-18 18:32' },
    { id: 6, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
    { id: 7, line: '杭州-506路', amount: '-4.00', type: '电子公交卡', time: '12-18 18:32' },
  ],
};

export default class Receipts extends React.Component {
  constructor(props) {
    super(props);

    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    const dataBlob = {};
    const sectionIDs = [];
    const rowIDs = [];

    Object.keys(receipts).forEach((month, index) => {
      sectionIDs.push(month);
      dataBlob[month] = month;
      rowIDs[index] = [];

      receipts[month].forEach(receipt => {
        rowIDs[index].push(receipt.id);
        dataBlob[receipt.id] = receipt;
      });
    });

    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
    };
  }

  render() {
    return (
      <ListView.IndexedList
        dataSource={this.state.dataSource}
        renderSectionHeader={
          (sectionData) => (<div className={styles.sectionHeader}>{sectionData}月</div>)
        }
        renderRow={(rowData) => (<Row receipt={rowData} />)}
        style={{
          height: document.body.clientHeight * 3 / 4,
          overflow: 'visible',
        }}
        quickSearchBarStyle={{
          display: 'none',
        }}
        delayTime={10}
      />
    );
  }
}
