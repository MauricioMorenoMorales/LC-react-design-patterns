import axios from 'axios';
import './App.css';
import CurrentUserLoader from './CurrentUserLoader';
import DataSource from './DataSource';
import ProductInfo from './ProductInfo';
import ResourceLoader from './ResourceLoader';
import { UserInfo } from './UserInfo.jsx';
import UserLoader from './UserLoader.jsx';

const getServerData = url => async () => {
	const response = await axios.get(url);
	return response.data;
};

const getLocalStorageData = key => () => localStorage.getItem(key);

const Text = ({ message }) => <h1>{message}</h1>;

function App() {
	return (
		<div>
			<h2>Data Wrapper</h2>
			<CurrentUserLoader>
				<UserInfo />
			</CurrentUserLoader>
			<hr />
			<h2>Data Loader</h2>
			<UserLoader userId={1}>
				<UserInfo />
			</UserLoader>
			<hr />
			<hr />
			<h2>Resource Loader</h2>
			<ResourceLoader
				resourceUrl="http://localhost:3333/users/1"
				resourceName="user"
			>
				<UserInfo />
			</ResourceLoader>
			<hr />
			<hr />
			<hr />
			<ResourceLoader
				resourceUrl="http://localhost:3333/products/1"
				resourceName="product"
			>
				<ProductInfo />
			</ResourceLoader>
			<hr />
			<hr />
			<hr />
			<hr />
			<h2>Data Source</h2>
			<DataSource
				getDataFunc={getServerData('http://localhost:3333/users/1')}
				resourceName="user"
			>
				<UserInfo />
			</DataSource>
			<DataSource
				getDataFunc={getLocalStorageData('message')}
				resourceName="message"
			>
				<Text />
			</DataSource>
		</div>
	);
}

export default App;
