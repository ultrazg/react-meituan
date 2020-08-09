import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ListView, Icon } from 'antd-mobile'
import ListItem from '../../components/listitem/ListItem'
import './homelistview.css'

export default class HomeListView extends Component {
  constructor(props) {
    super(props)
    let dt = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      dt: dt.cloneWithRows([]),
      height: document.documentElement.clientHeight - 45 - 50,
      scrollTop: 0
    }
  }

  async getDataFromServer() {
    let res = await fetch('/v1/all_restaurant')
    let data = await res.json()
    data = [...data, ...data, ...data]
    data = data.sort(() => Math.random() - 0.5)
    console.log(data)
    this.setState(({ dt }) => ({ dt: dt.cloneWithRows(data) }))
  }

  componentDidMount() {
    // 从服务器获取数据
    // fetch('http://127.0.0.1:8080/v1/all_restaurant')
    //   .then(res => res.json())
    //   .then(({ data }) => this.setState({ dt: this.state.dt.cloneWithRows(data) }))
    this.getDataFromServer()
  }

  // 归零
  scrollTop = () => {
    console.log('this.lv', this.lv)
    this.lv.scrollTo(0)
  }

  // 回到顶部组件，以及什么时候渲染该组件
  renderScrollTopBtn() {
    if (this.state.scrollTop < 500) {
      return null
    }
    return (
      <div className='top-btn'>
        <Icon type='up' size="sm"></Icon>
        <span className='title' onClick={this.scrollTop}>TOP</span>
      </div>
    )
  }

  // 滚动事件，判断滚到什么位置
  onScroll = e => {
    let scrollTop = e.target.scrollTop
    this.setState({ scrollTop })
  }

  render() {
    return (
      <div className='home-list-view-wrapper'>
        <ListView
          className="home-list-view"
          renderHeader={this.props.renderHeader}
          ref={el => this.lv = el}
          dataSource={this.state.dt}
          renderSectionHeader={(sData, sID) => <h2 className='home-list-section-header'>猜你喜欢</h2>}
          renderRow={info => <ListItem key={info.id} info={info} />}
          style={{
            width: '100vw',
            height: this.state.height,
            overflow: 'auto',
          }}
          onScroll={e => this.onScroll(e)}
          scrollEventThrottle={100}
        />
        {this.renderScrollTopBtn()}
      </div>
    )
  }
}