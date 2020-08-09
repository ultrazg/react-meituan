import React, {useState} from 'react';
import {TabBar} from 'antd-mobile';
import './App.css'
import HomeView from './views/homeview/HomeView';
import OrderView from './views/OrderView';
import DiscoverView from './views/discoverview/DiscoverView';
import UserView from './views/UserView';

const publicPATH = process.env.PUBLIC_URL

function App() {
	const [selected, setSelected] = useState('homeTab')

	return ( <
		div className = 'App' >
		<
		TabBar unselectedTintColor = "#949494"
		tintColor = "#02C1AF"
		barTintColor = "white"
		tabBarPosition = "bottom" >
		<TabBar.Item title = "首页"
		key = "Home"
		icon = { < div style = {
				{
					width: '22px',
					height: '22px',
					background: `url(${publicPATH}/img/tabbar/shouye.png) center center /  21px 21px no-repeat`
				}
			}
			/>
		}
		selectedIcon = { < div style = {
				{
					width: '22px',
					height: '22px',
					background: `url(${publicPATH}/img/tabbar/shouye1.png) center center /  21px 21px no-repeat`
				}
			}
			/>
		}
		selected = {
			selected === 'homeTab'
		}
		onPress = {
			() => {
				setSelected('homeTab');
			}
		} >
		<
		HomeView / >
		<
		/TabBar.Item> <
		TabBar.Item icon = { <
			div style = {
				{
					width: '22px',
					height: '22px',
					background: `url(${publicPATH}/img/tabbar/discover.png) center center /  21px 21px no-repeat`
				}
			}
			/>
		}
		selectedIcon = { <
			div style = {
				{
					width: '22px',
					height: '22px',
					background: `url(${publicPATH}/img/tabbar/discover1.png) center center /  21px 21px no-repeat`
				}
			}
			/>
		}
		title = "发现"
		key = "Discover"
		selected = {
			selected === 'discoverTab'
		}
		onPress = {
			() => {
				setSelected('discoverTab');
			}
		} >
		<
		DiscoverView / >
		<
		/TabBar.Item> <
		TabBar.Item icon = { <
			div style = {
				{
					width: '22px',
					height: '22px',
					background: `url(${publicPATH}/img/tabbar/dingdan.png) center center /  21px 21px no-repeat`
				}
			}
			/>
		}
		selectedIcon = { <
			div style = {
				{
					width: '22px',
					height: '22px',
					background: `url(${publicPATH}/img/tabbar/dingdan1.png) center center /  21px 21px no-repeat`
				}
			}
			/>
		}
		title = "订单"
		key = "Order"
		selected = {
			selected === 'orderTab'
		}
		onPress = {
			() => {
				setSelected('orderTab');
			}
		} >
		<
		OrderView / >
		<
		/TabBar.Item> <
		TabBar.Item icon = { <
			div style = {
				{
					width: '22px',
					height: '22px',
					background: `url(${publicPATH}/img/tabbar/wode.png) center center /  21px 21px no-repeat`
				}
			}
			/>}
			selectedIcon = { <
				div style = {
					{
						width: '22px',
						height: '22px',
						background: `url(${publicPATH}/img/tabbar/wode1.png) center center /  21px 21px no-repeat`
					}
				}
				/>
			}
			title = "我的"
			key = "my"
			selected = {
				selected === 'userTab'
			}
			onPress = {
				() => {
					setSelected('userTab');
				}
			} >
			<
			UserView / >
			<
			/TabBar.Item> <
			/TabBar> <
			/div>
		);
	}

	export default App;
