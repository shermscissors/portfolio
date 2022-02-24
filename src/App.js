import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import HeaderCompnent from './Components/Header/HeaderComponent'
import Projects from './Components/Projects/Projects';

function App() {
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
			</footer>
		</div>
	);
}

export default App;
