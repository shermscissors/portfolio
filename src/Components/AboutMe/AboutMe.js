import './AboutMe.css';

import React from 'react';

function AboutMe(props) {
	return (
		<div className='containers' id='aboutme-container'>
			<h1 className='headings' id='aboutme-heading'>
				&lt;About Me /&gt;
			</h1>

			<p id='aboutme-paragraph'>
				&lt;<span className='emphasize'>p </span> id=
				<span className='emphasize'>'aboutme-paragraph' </span>&gt;
				{/* Start actual text */}
				I am a budding Software Engineer transitioning from the restaurant
				industry, skilled with the ability to create and decipher HTML,
				JavaScript, and CSS. Through my skills and abilities, I will solve the
				need for a level-headed, creative , and highly resourceful asset to any
				company’s development team. <br />
				<br /> The desire for a world of intuitive and easy to parse code is
				what motivates me to do what I do every day, and I believe with my
				skills that I will be able to make that happen.
				{/* End actual text */}
				&lt;/ <span className='emphasize'>p</span>&gt;
			</p>
			<h2 className='headings' id='aboutme-skills'>
				&lt;Skills /&gt;
			</h2>
			<span className='image-container'>
				<img
					className='aboutme-badges'
					src='https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg'
					alt='html5 logo'
				/>
				<img
					className='aboutme-badges'
					src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
					alt='css3 logo'
				/>
				<img
					className='aboutme-badges'
					src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg'
					alt='git logo'
				/>
				<img
					className='aboutme-badges'
					src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Icons8_flat_command_line.svg'
					alt='command line logo'
				/>
				<img
					className='aboutme-badges'
					src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg'
					alt='javascript logo'
				/>
				<img
					className='aboutme-badges'
					src='https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
					alt='postgresql logo'
				/>
				<img
					className='aboutme-badges'
					src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
					alt='python logo'
				/>
				<img
					className='aboutme-badges'
					src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
					alt='react logo'
				/>
			</span>

			<a href='mailto:christian.gales09@gmail.com' id='contact-anchor'>
				<button id='contact-button'>Contact Me</button>
			</a>
		</div>
	);
}

export default AboutMe;
