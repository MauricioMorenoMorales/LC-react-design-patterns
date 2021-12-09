import React from 'react';
import { useResource } from './useResource';

const ProductInfo = ({ productId }) => {
	const product = useResource(`http://localhost:3333/products/${productId}`);
	const { name, price, description, rating } = product || {};
	return product ? (
		<>
			<h3>{name}</h3>
			<p>{price}</p>
			<h3>Description:</h3>
			<p>{description}</p>
			<p>Average Rating: {rating}</p>
		</>
	) : (
		<p>Loading...</p>
	);
};

export default ProductInfo;
