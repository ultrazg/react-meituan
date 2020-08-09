import React, { Component } from 'react';
import { ListView } from 'antd-mobile';

export default class UseListView extends Component {
  constructor(props) {
    super(props);
    // 创建一个ListViewDatasource对象
    let dt = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      // 要更新datasource中的数据，请（每次都重新）调用cloneWithRows方法
      // 如果是分组数据请使用cloneWithRowsAndSections方法
      dt: dt.cloneWithRows([])
    }
  }

  componentDidMount() {
    setTimeout(() => {
      let data = [
        { id: 0, name: 'react' },
        { id: 1, name: 'react' },
        { id: 2, name: 'react' },
        { id: 3, name: 'react' },
        { id: 4, name: 'react' },
        { id: 5, name: 'react' },
        { id: 6, name: 'react' }
      ]
      this.setState({ dt: this.state.dt.cloneWithRows(data) })
    }, 2000);
  }

  render() {
    return (
      <div>
        <ListView
          dataSource={this.state.dt}
          renderRow={(rowData) => <div key={rowData.id}>{rowData.name}</div>}
          renderSeparator={(sectionId,rowID) => <p key={rowID}>分割线</p>}
          useBodyScroll
        />
      </div>
    )
  }
}