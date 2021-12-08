import logo from './logo.svg';
import './App.css';
import SplitScreen from './SplitScreen';

const LeftHandComponent = ({ name }) => (
	<h1 style={{ backgroundColor: 'green' }}>{name}</h1>
);
const RightHandComponent = ({ message }) => (
	<h1 style={{ backgroundColor: 'red' }}>{message}</h1>
);

function App() {
	return (
		<SplitScreen leftWeight={1} rightWeight={3}>
			<LeftHandComponent name="Shaun" />
			<RightHandComponent message="Hello" />
		</SplitScreen>
	);
}

export default App;
