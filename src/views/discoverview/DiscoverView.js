import React, { Component } from 'react'
import './discoverview.css'

export default class DiscoverView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getDiscover()
  }

  async getDiscover() {
    let res = await fetch('/v1/discover')
    let data = await res.json()
    data = data.sort(() => Math.random() - 0.5)
    this.setState({ data })
  }

  render() {
    if (!this.state.data) {
      return <p>Loading...</p>
    }
    let { data } = this.state
    return (
      <div className='discover-view'>
        <div className="discover-top">发现</div>
        <div className="discover-content">
          <ul className='discover-item'>
            {
              data.map((item, index) => (
                <li key={index} className='discover-item-box'>
                  <span>
                    <img src={item.pic} alt="头图" className='discover-item-pic auto-img' />
                  </span>
                  <div className='discover-item-title'>{item.title}</div>
                  <div>
                    <img src={item.head} alt="头像" className='discover-item-head' />
                    <span className='discover-item-author'>{item.author}</span>
                    <img src='../img/like.png' alt="" className='discover-item-likeicon auto-img'/>
                    <span className='discover-item-like'>{item.like}</span>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}