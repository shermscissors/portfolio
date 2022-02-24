import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import HeaderCompnent from './Components/Header/HeaderComponent';
import Projects from './Components/Projects/Projects';

function App() {
		setTimeout(() => {
			console.log(
				"Welcome to the portfolio of David Gales: Software Developer. If you're reading this: you are either checking my code for a review, or you know about the developer tools! Either way, I think that's pretty neat. I want to put something special here for all the people that see this in th future. I don't quite know what to put yet. Maybe it'll be just this message alone..."
			);
		}, 5000);
	return (
		<div className='App'>
			<header>
				<HeaderCompnent />
			</header>
			<div className='body-container'>
				<Projects />
				<AboutMe />
			</div>
			<footer>
				<h1 className='headings'>You made it to the bottom of the page!</h1>
				<h6>
					<a
						href='https://stuntmccartney.com'
						target={'_blank'}
						rel='noreferrer'>
						Made by Stunt McCartney
					</a>
				</h6>
			</footer>
		</div>
	);
}

export default App;
