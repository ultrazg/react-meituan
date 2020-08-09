import React from 'react'
import { useHistory } from 'react-router-dom'
import './ListItem.css'

function ListItem({ info }) {
  const history = useHistory()
  const {
    pic_url: avatar,
    name,
    id,
    address,
    food_score: score,
    discounts,
    delivery_time_tip: deliveryTime
  } = info
  return (
    <div className='tuan-list-item' onClick={() => history.push(`/detail/${id}`, { name, avatar })}>
      <div className="list-item-content">
        <div className="list-item-avatar">
          <img className="auto-img" src={avatar} alt="avatar" />
        </div>
        <div className="list-item-desc">
          <h2 className="list-item-seller-name">{name}</h2>
          <p className="list-item-info">
            <span className="star">{score}</span><span className="address">{address}</span>
          </p>
          <ul className="list-item-discounts">
            {
              discounts.map((item, index) => (
                <li key={index} className="discount-item">
                  <img className="discount-icon" src={item.icon_url} alt="" />
                  <span className="discount-info">{item.info}</span>
                </li>
              ))
            }
          </ul>
          <span className="list-item-delivery">{deliveryTime}</span>
        </div>
      </div>
    </div>
  )
}

export default ListItem