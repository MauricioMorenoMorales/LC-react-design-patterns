import { useState, useEffect } from 'react';

export const ControlledForm = () => {
	const [nameInputError, setNameInputError] = useState('')
	const [ageInputError, setAgeInputError] = useState('')
	const [hairColorInputError, setHairColorInputError] = useState('')
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [hairColor, setHairColor] = useState('');

	useEffect(() => {
		if (name.length < 2) setNameInputError('Name must be two or more characters')
		else setNameInputError('')
	}, [name]);

	return (
		<form action="">
			{nameInputError && (<p>{nameInputError}</p>)}
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={name}
				onChange={event => setName(event.target.value)}
			/>
			<input
				type="number"
				name="age"
				placeholder="Age"
				value={age}
				onChange={event => setAge(Number(event.target.value))}
			/>
			<input
				type="text"
				name="hairColor"
				placeholder="Hair Color"
				value={hairColor}
				onChange={event => setHairColor(event.target.value)}
			/>
			<button>Submit this</button>
		</form>
	);
};
