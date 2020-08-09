import React, { useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Icon } from 'antd-mobile';
import './mapview.css';

function MapView() {
  const location = useLocation();
  const history = useHistory();
  const myMap = useRef(null);

  useEffect(() => {
    // window取到全局变量
    const BMap = window.BMapGL
    let map = new BMap.Map(myMap.current)
    let lat = location.state && location.state.lat;
    let lng = location.state && location.state.lng;
    //默认坐标
    lat = lat || 39.915;
    lng = lng || 116.404;
    // 坐标
    let point = new BMap.Point(lng, lat);
    map.centerAndZoom(point, 15);
    let marker = new BMap.Marker(point);        // 创建标注   
    map.addOverlay(marker);

    return () => {
      // 页面被注销
    }
  })

  return (
    <div className='map-wrapper'>
      <div className="map" ref={myMap}></div>
      <div className="map-back" onClick={() => history.go(-1)}>
        <Icon type='left' />
      </div>
    </div>
  );
}

export default MapView;