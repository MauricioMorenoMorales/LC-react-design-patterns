import logo from './logo.svg';
import './App.css';
import { RegularList } from './RegularList';
import { SmallPersonlistItem } from './people/SmallPersonListItem';
import { LargePersonListItem } from './people/LargePersonListItem';

const people = [
	{
		name: 'John Doe',
		age: 54,
		heirColor: 'Brown',
		hobbies: ['swimming', 'bicycling', 'VideoGames'],
	},
	{
		name: 'Brenda Smith',
		age: 27,
		heirColor: 'Black',
		hobbies: ['swimming', 'bicycling', 'VideoGames'],
	},
	{
		name: 'Jane Garcia',
		age: 27,
		heirColor: 'Blonde',
		hobbies: ['swimming', 'bicycling', 'VideoGames'],
	},
];

const products = [
	{
		name: 'Flat-screen TV',
		price: '$300',
		description: 'Huge LCD screen, a great deal',
	},
];

function App() {
	return (
		<>
			<RegularList
				items={people}
				resourceName="person"
				itemComponent={LargePersonListItem}
			/>
			<RegularList
				items={people}
				resourceName="person"
				itemComponent={SmallPersonlistItem}
			/>
		</>
	);
}

export default App;
