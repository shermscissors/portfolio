import './Projects.css';
import React from 'react';

function Projects(props) {
	return (
		// Main projects container, shares same container class CSS as the 'About Me' page
		// Gets it's own personal ID CSS in the Projects.css
		<div className='containers' id='projects-container'>
			{/* Shares same h1 CLASS CSS from the APP.css */}
			<h1 className='headings' id='projects-heading'>
				Projects
			</h1>
			{/* Creates DIV so that it can have a GRID DISPLAY inside of a FLEX container */}
			<div id='projects-gallery'>
				{/* Each individual panel */}
				<span className='projects-grid-template' id='project-1'>
					<span className='lower-third'>
						<a
							href='https://shermscissors.github.io/Self-Scoring-Trivia/'
							target={'_blank'}
							rel='noreferrer'
							className='anchor-reset'>
							<h3 className='lower-third-text'>Project One</h3>
						</a>
					</span>
				</span>
				<div className='projects-grid-template' id='project-2'>
					<div className='lower-third'>
						<a
							href='https://tactical-goldfish.netlify.app/'
							target={'_blank'}
							rel='noreferrer'
							className='anchor-reset'>
							<h3 className='lower-third-text'>Project Two</h3>
						</a>
					</div>
				</div>
				<div className='projects-grid-template' id='project-3'>
					<div className='lower-third'>
						<a
							href='https://the-watson.netlify.app/'
							target={'_blank'}
							rel='noreferrer'
							className='anchor-reset'>
							<h3 className='lower-third-text'>Project Three</h3>
						</a>
					</div>
				</div>
				<div className='projects-grid-template' id='project-4'>
					<div className='lower-third'>
						<a
							href='https://peeep.netlify.app/'
							target={'_blank'}
							rel='noreferrer'
							className='anchor-reset'>
							<h3 className='lower-third-text'>Project Four</h3>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
