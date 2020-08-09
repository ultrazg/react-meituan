import React, { Component } from 'react'
import { NavBar, Icon, Button, Grid } from 'antd-mobile';
import './homeview.css';
import api from '../../api'
import HomeListView from './HomeListView';
import { Link } from 'react-router-dom'

const publicPATH = process.env.PUBLIC_URL

export default class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderNavLeft() {
    return (
      <div>
        <div />
        <div className="address">
          广州<Icon type="down" size="xxs" />
        </div>
      </div>
    )
  }

  renderHeader() {
    return (<Grid
      data={api.menuInfo}
      columnNum={5}
      hasLine={false}
    />)
  }

  render() {
    return (
      <div className='home-view'>
        <NavBar
          className="home-navbar"
          mode="light"
          icon={this.renderNavLeft()}
          onLeftClick={() => console.log('onLeftClick')}
          // rightContent={<Icon className="home-navbar-ellipsis" key="1" type="ellipsis" />}
          rightContent={
            <div style={{
              width: '22px',
              height: '22px',
              background: `url(${publicPATH}/img/nav-icon-wode.png) center center /  21px 21px no-repeat`
            }}
            />
          }
        >
          <Link to='/search'>
            <Button
              className="navbar-search"
              icon="search"
              inline
              size="small">请输入商家名、品类或者商圈
          </Button>
          </Link>
        </NavBar>
        <HomeListView renderHeader={this.renderHeader} />
      </div>
    )
  }
}