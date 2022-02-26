// Components
import HeaderCompnent from './Components/Header/HeaderComponent';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';

// CSS
import './App.css';

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
				<h1 className='headings' id='footer-heading'>
					You made it to the bottom of the page!
				</h1>
				<p id='aboutme-paragraph'>
					&lt;<span className='emphasize'>p </span> id=
					<span className='emphasize'>'footer-paragraph' </span>&gt;
					{/* Start actual text */}
					And such is life, this page is an ever shifting panel of information, colors, and shapes. Maybe it will change on your next visit? Who knows what truly is in store for you? Since you've made it this far, I believe you've earned yourself a reward, or at least a break. If you've been milling through endless portfolios in the prospect of finding a potential candidate for whatever position you're trying to fill: go enjoy something you love. <br/><br/>
					It's the least you can do for yourself.
					{/* End actual text */}
					&lt;/ <span className='emphasize'>p</span>&gt;
				</p>
				<span id='footer-links'>
					<a href='https://stuntmccartney.com' target={'_blank'} rel='noreferrer'>
						<h6 id='footer-anchor'>Made by Stunt McCartney</h6>
					</a>
				</span>
			</footer>
		</div>
	);
}

export default App;
