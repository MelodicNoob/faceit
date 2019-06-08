import React from 'react';
import NavigationLink from './NavigationLink';

export default function Navigation({ links, isDash, changeTheme }) {
	return (
		<nav>
			<ul>
				{links.map(link => {
					return (
						<NavigationLink
							changeTheme={changeTheme}
							isDash={isDash}
							key={link.id}
							link={link}
						/>
					);
				})}
			</ul>
		</nav>
	);
}
