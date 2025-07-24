import './App.css';
import Counter from './components/Counter';
import NameInput from './components/NameInput';
import ToggleMessage from './components/ToggleMessage';
import WelcomeMessage from './components/WelcomeMessage';
import LiveNameLogger from './components/LiveNameLogger';
import ReducerTodo from './components/ReducerTodo';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
	return (
		<div>
			{/* <Counter /> */}
			{/* <NameInput /> */}
			{/* <ToggleMessage /> */}
			{/* <WelcomeMessage /> */}
			{/* <LiveNameLogger /> */}
			<ErrorBoundary>
				<ReducerTodo />
			</ErrorBoundary>
		</div>
	);
}

export default App;
