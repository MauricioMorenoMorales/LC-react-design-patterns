import { withEditableUser } from './withEditableUser';
export const UserInfoForm = withEditableUser(
	({ user, onChangeUser, onSaveUser, onResetUser }) => {
		const { name, age, hairColor } = user || {};
		return user ? (
			<div>
				<label>
					Name:
					<input
						type="text"
						name={name}
						onChange={event => onChangeUser({ name: event.target.value })}
					/>
				</label>
				<label>
					Name:
					<input
						type="number"
						name={age}
						onChange={event =>
							onChangeUser({ age: Number(event.target.value) })
						}
					/>
				</label>
				<label>
					Name:
					<input
						type="text"
						name={hairColor}
						onChange={event => onChangeUser({ hairColor: event.target.value })}
					/>
				</label>
				<button onClick={onResetUser}>Reset</button>
				<button onClick={onSaveUser}>Save Changes</button>
			</div>
		) : (
			<p>Loading</p>
		);
	},
	1,
);
