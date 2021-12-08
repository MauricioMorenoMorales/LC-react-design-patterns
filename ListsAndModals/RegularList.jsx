export const RegularList = ({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
	return (
		<>
			{/* The destructuring produces person={item} */}
			{items.map((item, index) => (
				<ItemComponent key={index} {...{[resourceName]: item}}/>
			))}
		</>
	)
};
