import React, { Component } from 'react';
import { NavBar, Icon, SearchBar } from 'antd-mobile';
import './searchview.css'

class SearchView extends Component {
  onChange = (value) => {
    this.setState({ value });
  };

  clear = () => {
    this.setState({ value: '' });
  };
  
  render() {
    return (
      <div>
        <NavBar
          className='search-nav'
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
        >搜索你想要的</NavBar>
        <SearchBar placeholder="搜索" maxLength={8} />
        搜索页面
      </div>
    );
  }
}

export default SearchView;