import './HeaderComponent.module.css';
import React from 'react';

function HeaderCompnent(props) {
	return (
		<div className='masthead'>
            <h1 className='headings'>Will this make me whole?</h1>
			<a
				href='https://docs.google.com/document/d/18npLLVlZKowKMP7ZYT4Ub3_Ma27Hxq6JN2MlGKXIvgw/edit?usp=sharing'
				target={'_blank'}
				rel='noreferrer'>
				<button className='masthead-button'>My Resume</button>
			</a>
		</div>
	);
}

export default HeaderCompnent;
