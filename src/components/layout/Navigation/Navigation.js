import React from 'react';
import NavigationLink from './NavigationLink';

export default function Navigation({ links, isDash }) {
	return (
		<nav>
			<ul>
				{links.map(link => {
					return <NavigationLink isDash={isDash} key={link.id} link={link} />;
				})}
			</ul>
		</nav>
	);
}
