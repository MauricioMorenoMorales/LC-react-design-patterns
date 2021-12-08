export const NumberedList = ({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
	return (
		<>
			{/* The destructuring produces person={item} */}
			{items.map((item, index) => (
				<>
					<h3>{index + 1}</h3>
					<ItemComponent key={index} {...{ [resourceName]: item }} />
				</>
			))}
		</>
	);
};
