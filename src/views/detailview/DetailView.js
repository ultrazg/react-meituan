import React, { Component } from 'react';
import { NavBar, Icon, WhiteSpace, ListView } from 'antd-mobile';
import Star from '../../components/star/Star';
import ListItem from '../../components/listitem/ListItem'
import './detailview.css';
import '../../components/listitem/ListItem.css'

class DetailView extends Component {
  constructor(props) {
    super(props);
    const dt = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      data: {},
      pic_url: null,
      name: null,
      dt
    };
  }

  componentDidMount() {
    this.getDetailSellerData()
    this.getRecommendSeller()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 路由守卫，路由发生更新并且不是后退操作
    if (prevProps.location !== this.props.location && this.props.history.action !== 'POP') {
      // 代表路由发生更新 刷新页面
      this.getDetailSellerData()
      this.getRecommendSeller()
      // 回到顶部
      window.scrollTo(0, 0)
    }
  }

  // 网络请求，获取相应id的商家信息
  async getDetailSellerData() {
    let { id } = this.props.match.params;
    let res = await fetch('/v1/restaurant/' + id);
    let data = await res.json();
    let { avatar, name } = this.props.location.state
    // let name = this.props.location.state
    console.log(avatar, name)
    console.log(data);
    this.setState({ data, pic_url: avatar, name });
  }

  // 推荐
  async getRecommendSeller() {
    let res = await fetch('/v1/all_restaurant')
    let data = await res.json()
    data = data.sort(() => Math.random() - 0.5)
    console.log(data)
    this.setState(({ dt }) => ({ dt: dt.cloneWithRows([...data, ...data]) }))
  }

  renderNav() {
    // let name = this.props.location.state && this.props.location.state.name
    // this.setState({ pic_url: picUrl })
    return (
      <NavBar
        className='detail-nav'
        mode="light"
        icon={<Icon type="left" />}
        // 后退一步
        onLeftClick={() => this.props.history.go(-1)}
        rightContent={[
          <div key='0' className='icon-star-empty right-btn' />,
          <div key='1' className='icon-redo2 share' />,
          <Icon key="2" type='ellipsis' />,
        ]}
      >商家详情</NavBar>)
  }

  renderBanner() {
    let {
      pic_url: pic,
      average_price_tip: average,
      food_score: foodScore,
      name,
      call_center: phone,
      address,
      lat,
      lng
    } = this.state.data
    return (
      <div className='detail-banner'>
        <div className='detail-img'>
          <img className='auto-img' src={this.state.pic_url} alt="商家图片" />
        </div>
        <h2 className='detail-name'>{this.state.name}</h2>
        <p className='detail-score-border'>
          <span className='detail-score'><Star score={foodScore} />{foodScore}分</span>
          <span className='detail-average'>{average}</span>
        </p>
        <div className='detail-address'>
          <div className='detail-map' 
          onClick={() => { this.props.history.push('/location', { lat, lng }) }}
          >
            <p className='detail-location'><span className='icon-location'></span>{address}</p>
            <p className='detail-phonenumber'>联系电话：{phone}</p>
          </div>
          <div className='icon-phone detail-phone'></div>
        </div>
      </div>
    )
  }

  renderDiscount() {
    let { discounts } = this.state.data
    return (
      <div className='detail-banner'>
        <h2 className='detail-title'>优惠信息</h2>
        <ul>
          {
            discounts.map((item, index) => (
              <li key={index} className='detail-discount'>
                <span className='detail-icon'>
                  <img src={item.icon_url} alt="icon" className='auto-img' />
                </span>
                <span className='detail-info'>
                  {item.info}
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }

  render() {
    // 此页面的多个组件都需要使用this.state.data，因此在组件渲染前加入loading，此处可以用高阶组件替代
    if (!this.state.data.name) {
      return <p>Loading...</p>
    }
    return (
      <div className='detail-view'>
        {this.renderNav()}
        {this.renderBanner()}
        <WhiteSpace size="md" />
        {this.renderDiscount()}
        <WhiteSpace size="md" />
        <ListView
          renderSectionHeader={(sData, sID) => <h2 className='home-list-section-header'>更多推荐</h2>}
          dataSource={this.state.dt}
          renderRow={info => <ListItem key={info.id} info={info} />}
          useBodyScroll
        />
      </div>
    );
  }
}

export default DetailView;