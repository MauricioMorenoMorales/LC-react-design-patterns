const express = require('express');

const app = express();

app.use(express.json());

let currentUser = {
	name: 'John Doe',
	age: 54,
	heirColor: 'Brown',
	hobbies: ['swimming', 'bicycling', 'VideoGames'],
};

let users = [
	{
		name: 'John Doe',
		age: 54,
		heirColor: 'Brown',
		hobbies: ['swimming', 'bicycling', 'VideoGames'],
		id: 1,
	},
	{
		name: 'Brenda Smith',
		age: 27,
		heirColor: 'Black',
		hobbies: ['swimming', 'bicycling', 'VideoGames'],
		id: 2,
	},
	{
		name: 'Jane Garcia',
		age: 27,
		heirColor: 'Blonde',
		hobbies: ['swimming', 'bicycling', 'VideoGames'],
		id: 3,
	},
];

let products = [
	{
		name: 'Flat-screen TV',
		price: '$300',
		description: 'Huge LCD screen, a great deal',
		rating: 4,
		id: 1,
	},
	{
		name: 'Flat-screen TV',
		price: '$300',
		description: 'Huge LCD screen, a great deal',
		rating: 4,
		id: 2,
	},
	{
		name: 'Flat-screen TV',
		price: '$300',
		description: 'Huge LCD screen, a great deal',
		rating: 4,
		id: 3,
	},
	{
		name: 'Flat-screen TV',
		price: '$300',
		description: 'Huge LCD screen, a great deal',
		rating: 4,
		id: 4,
	},
];

app.get('/current-user', (req, res) => res.json(currentUser));

app.get('/users/:id', (req, res) => {
	const { id } = req.params;
	res.json(users.find(user => user.id === id));
});

app.post('/users/:id', (req, res) => {
	const { id } = req.params;
	const { user: updatedUser } = req.body;

	users = users.map(user => (user.id === id ? updatedUser : user));
	res.json(users.find(user => user.id === id));
});

app.get('/users', (req, res) => res.json(users));

app.get('/products/:id', (req, res) => {
	const { id } = req.params;
	res.json(products.find(product => product.id === id));
});

app.get('/products', (req, res) => res.json(products));

app.listen(3333, () => console.log('app running on port 3333'));
