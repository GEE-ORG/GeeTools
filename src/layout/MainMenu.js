/**
 * Created by geeku on 28/04/2017.
 */
import React, {Component} from 'react';
import Item from '../Components/MainMenu-Item';

class MainMenu extends Component {
	render() {
		return (
			<div className="main-menu">
				MainMenu
				<ul>
					<Item/>
				</ul>
			</div>
		);
	}
}

export default MainMenu;
