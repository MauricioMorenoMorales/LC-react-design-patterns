import React, { createRef } from 'react';

export const UncontrolledForm = () => {
	const nameInput = createRef();
	const ageInput = createRef();
	const hairColorInput = createRef();
	const handleSubmit = event => {
		console.log(nameInput.current.value);
		console.log(ageInput.current.value);
		console.log(hairColorInput.current.value);
		event.preventDefault();
	};
	return (
		<form onSubmit={handleSubmit}>
			<input name="name" placeholder="Name" type="text" ref={nameInput} />
			<input name="age" placeholder="age" type="number" ref={ageInput} />
			<input
				name="hairColor"
				placeholder="Hair Color"
				type="text"
				ref={hairColorInput}
			/>
			<input type="submit" value="Submit" />
		</form>
	);
};
