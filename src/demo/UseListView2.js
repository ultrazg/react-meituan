import React, { Component } from 'react';
import { ListView } from 'antd-mobile';

export default class UseListView2 extends Component {
  constructor(props) {
    super(props);

    let dt = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })

    this.state = {
      // dt: dt.cloneWithRowsAndSections()
      dt: dt
    }
  }

  componentDidMount() {
    setTimeout(() => {
      // let data = [
      //   ['LOL', 'OW', 'DOTA'],
      //   ['王者荣耀', '阴阳师', '和平精英'],
      //   ['马里奥', '宝可梦剑盾', '塞尔达'],
      //   ['怪物猎人世界', '黑魂', '死亡搁浅'],
      // ]

      // let data = {
      //   '网游': ['LOL', 'OW', 'DOTA'],
      //   '手游': ['王者荣耀', '阴阳师', '和平精英'],
      //   '掌机游戏': ['马里奥', '宝可梦剑盾', '塞尔达'],
      //   '主机游戏': ['怪物猎人世界', '黑魂', '死亡搁浅'],
      // }

      let data = {
        '网游': {
          key1: 'LOL',
          key2: 'OW',
          key3: 'DOTA'
        },
        '手游': {
          key1: '王者荣耀',
          key2: '阴阳师',
          key3: '和平精英'
        },
        '掌机游戏': {
          key1: '马里奥',
          key2: '宝可梦剑盾',
          key3: '塞尔达'
        },
        '主机游戏': {
          key1: '怪物猎人世界',
          key2: '黑魂',
          key3: '死亡搁浅'
        },
      }

      this.setState({ dt: this.state.dt.cloneWithRowsAndSections(data) })
    }, 2000);
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dt}
        renderRow={(rowData, sectionID, rowID) => <div
          key={sectionID + '-' + rowID}
        >{rowData}sID/{sectionID}rID/{rowID}</div>}
        renderSeparator={(sectionID, rowID) => <p key={sectionID + '-' + rowID}>Separator</p>}
        // 组
        renderSectionHeader={(sectionData, sectionID) => <h3 key={sectionID}>组{sectionID}</h3>}
        useBodyScroll
      />
    )
  }
}