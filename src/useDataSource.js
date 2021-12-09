import { useState, useEffect } from 'react';

export const useDataSource = getResourceFunction => {
	const [resource, setResource] = useState(null);
	useEffect(() => {
		(async () => {
			const response = await getResourceFunction();
			setResource(response);
		})();
	}, []);

	return resource;
};
