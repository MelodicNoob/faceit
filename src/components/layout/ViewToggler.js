import React from 'react';

import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

export default function ViewToggler({ view, toggle }) {
	return (
		<div className='view-selectors float-right'>
			<ViewModuleIcon
				fontSize='large'
				onClick={() => toggle('cards')}
				className={view === 'cards' ? 'active' : null}
			/>
			<ViewListIcon
				fontSize='large'
				onClick={() => toggle('list')}
				className={view === 'list' ? 'active' : null}
			/>
		</div>
	);
}
