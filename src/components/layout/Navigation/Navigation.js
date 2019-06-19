import React from 'react';
import NavigationLink from './NavigationLink';

import { pages } from '../../../data/pages';

export default function Navigation({ isDash }) {
	return (
		<nav>
			<ul>
				{pages.map(page => {
					return <NavigationLink isDash={isDash} key={page.id} link={page} />;
				})}
			</ul>
		</nav>
	);
}
