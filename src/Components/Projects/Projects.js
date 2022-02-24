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
				<div className='projects-grid-template' id='project-1'>
					<h2 className='projects-subheading'>Project One</h2>
					<img
						className='project-photo'
						src='/public/assets/project1.png'
						alt='Project One: Self-Scoring Photography Trivia'
					/>
				</div>
				<div className='projects-grid-template' id='project-2'>
					<h2 className='projects-subheading'>Project Two</h2>
					<img
						className='project-photo'
						src='/public/assets/project2.png'
						alt='Project Two: Just Weather'
					/>
				</div>
				<div className='projects-grid-template' id='project-3'>
					<h2 className='projects-subheading'>Project Three</h2>
					<img
						className='project-photo'
						src='/public/assets/project3.png'
						alt='Project Three: The Watson'
					/>
				</div>
				<div className='projects-grid-template' id='project-4'>
					<h2 className='projects-subheading'>Project Four</h2>
					<img
						className='project-photo'
						src='/public/assets/project4.png'
						alt='Project Four: PeeP'
					/>
				</div>
			</div>
		</div>
	);
}

export default Projects;
