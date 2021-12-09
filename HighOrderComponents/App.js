import { printProps } from './printProps';
import { UserInfo } from './UserInfo.jsx';
import { withUser } from './withUser.jsx';
import { UserInfoForm } from './UserInfoForm';

const UserInfoWithLoader = withUser(UserInfo, 1);

const App = () => {
	return (
		<div>
			<UserInfoForm />
		</div>
	);
};

export default App;
