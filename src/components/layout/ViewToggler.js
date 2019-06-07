import React from 'react';

export default function ViewToggler({ view, toggle }) {
	return (
		<div className='view-selectors float-right'>
			<i
				onClick={() => toggle('cards')}
				className={
					view === 'cards' ? 'fa fa-th-large active' : 'fa fa-th-large'
				}
			/>
			<i
				onClick={() => toggle('list')}
				className={view === 'cards' ? 'fa fa-list' : 'fa fa-list active'}
			/>
		</div>
	);
}
