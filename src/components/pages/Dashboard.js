import React, { Component } from 'react';
import DashCard from './DashCard';

export default class Dashboard extends Component {
	render() {
		const { pages } = this.props;
		return (
			<div className='dashboard'>
				{pages.map(({ id, name, icon, color }) => {
					return (
						<DashCard key={id} id={id} name={name} icon={icon} color={color} />
					);
				})}
			</div>
		);
	}
}
