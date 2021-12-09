import { useCurrentUser } from './useCurrentUser';
import { useUser } from './useUser';
import { useResource } from './useResource';
import { useDataSource } from './useDataSource';
import axios from 'axios';

const serverResource = resourceUrl => async () => {
	const response = await axios.get(resourceUrl);
	return response.data;
};

export const UserInfo = ({ userId }) => {
	const user = useDataSource(serverResource('http://localhost:3333/users/1'));
	const { name, age, hairColor, hobbies } = user || {};
	return user ? (
		<>
			<h3>{name}</h3>
			<p>Age: {age} years</p>
			<p>Hair Color: {hairColor}</p>
			<h3>Hobbies:</h3>
			<ul>
				{hobbies.map(hobby => (
					<li key={hobby}>{hobby}</li>
				))}
			</ul>
		</>
	) : (
		<p>Loading...</p>
	);
};
