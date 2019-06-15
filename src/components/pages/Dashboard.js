import React, { Component } from 'react';

import { newTheme } from '../../context/ThemeContext';
import DashCard from './DashCard';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.changeTheme(newTheme('#FF0000'));
	}

	render() {
		const { pages, changeTheme } = this.props;
		return (
			<div className='dashboard'>
				{pages.map(({ id, name, icon, color }) => {
					return (
						<DashCard
							key={id}
							id={id}
							name={name}
							icon={icon}
							color={color}
							changeTheme={() => changeTheme}
						/>
					);
				})}
			</div>
		);
	}
}
