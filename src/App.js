import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {DatePicker} from 'antd';
import MainMenu from './layout/MainMenu';
import SubMenu from './layout/SubMenu';

class App extends Component {
	render() {
		return (
			<div className="App">
				<MainMenu/>
				<SubMenu/>
			</div>
		);
	}
}

export default App;
