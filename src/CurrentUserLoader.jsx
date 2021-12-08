import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CurrentUserLoader = ({ children }) => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		(async () => {
			const response = await axios.get('http://localhost:3333/current-user');
			console.log(response);
			const currentUser = response.data;
			setUser(currentUser);
		})();
	}, []);

	return (
		<>
			{React.Children.map(children, child => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, { user });
				}
				return child;
			})}
		</>
	);
};

export default CurrentUserLoader;
