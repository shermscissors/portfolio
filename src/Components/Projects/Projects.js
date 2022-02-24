import './Projects.css';
import React from 'react';

function Projects(props) {
	return (
		// Main projects container, shares same container class CSS as the 'About Me' page
		// Gets it's own personal ID CSS in the Projects.css
		<div className='containers' id='projects-container'>
			{/* Shares same h1 CLASS CSS from the APP.css */}
			<h1 className='headings'>Projects</h1>
			{/* Creates DIV so that it can have a GRID DISPLAY inside of a FLEX container */}
			<div id='projects-gallery'>
				{/* Each individual panel */}
				<div id='project-1'>
					<h2 className='projects-subheading'>Project One</h2>
					<img
						src='/src/assets/project1.png'
						alt='Project One: Self-Scoring Photography Trivia'
						loading='Loading...'
					/>
				</div>
				<div id='project-2'>
					<h2 className='projects-subheading'>Project Two</h2>
				</div>
				<div id='project-3'>
					<h2 className='projects-subheading'>Project Three</h2>
				</div>
				<div id='project-4'>
					<h2 className='projects-subheading'>Project Four</h2>
				</div>
			</div>
		</div>
	);
}

export default Projects;
