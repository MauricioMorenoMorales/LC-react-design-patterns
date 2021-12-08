import logo from './logo.svg';
import './App.css';
import { RegularList } from './RegularList';
import { SmallPersonlistItem } from './people/SmallPersonListItem';
import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallProductListItem } from './products/SmallProductItemList';
import { LargeProductListItem } from './products/LargeProductListItem';
import { NumberedList } from './NumberedList';
import { Modal } from './Modal';

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
		rating: 4,
	},
	{
		name: 'Flat-screen TV',
		price: '$300',
		description: 'Huge LCD screen, a great deal',
		rating: 4,
	},
	{
		name: 'Flat-screen TV',
		price: '$300',
		description: 'Huge LCD screen, a great deal',
		rating: 4,
	},
	{
		name: 'Flat-screen TV',
		price: '$300',
		description: 'Huge LCD screen, a great deal',
		rating: 4,
	},
];

function App() {
	return (
		<>
			<Modal>
				<RegularList
					items={people}
					resourceName="person"
					itemComponent={LargePersonListItem}
				/>
			</Modal>
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
			<NumberedList
				items={products}
				resourceName="product"
				itemComponent={SmallProductListItem}
			/>
			<RegularList
				items={products}
				resourceName="product"
				itemComponent={LargeProductListItem}
			/>
			<NumberedList
				items={people}
				resourceName="person"
				itemComponent={LargePersonListItem}
			/>
		</>
	);
}

export default App;
