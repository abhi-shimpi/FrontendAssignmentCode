import './App.css';
import Login from './Component/Login';
import Browse from './Component/Browse';
import appStore from './utils/appStore';
import { Provider } from "react-redux"
import LanguageWiseMovies from './Component/LanguageWiseMovies';
import FavouriteMovies from './Component/FavouriteMovies';
import GptSearch from './Component/GptSearch';
import CheckForAuthentication from './Component/CheckForAuthentication';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Player from './Component/Player';
import { ToastContainer } from 'react-toastify';

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={
				<CheckForAuthentication>
					<Login />
				</CheckForAuthentication>
			} />

			<Route path="/login" element={
				<CheckForAuthentication>
					<Login />
				</CheckForAuthentication>
			} />


			<Route path="/browse" element={
				<CheckForAuthentication>
					<Browse />
				</CheckForAuthentication>
			} />

			<Route path="/language-wise-movies/:langId" element={
				<CheckForAuthentication>
					<LanguageWiseMovies />
				</CheckForAuthentication>
			} />

			<Route path="/gpt-search" element={
				<CheckForAuthentication>
					<GptSearch />
				</CheckForAuthentication>
			} />

			<Route path="/my-list" element={
				<CheckForAuthentication>
					<FavouriteMovies />
				</CheckForAuthentication>
			} />

			<Route path="/player/:id" element={
				<CheckForAuthentication>
					<Player />
				</CheckForAuthentication>
			} />
		</Routes>
	)
};
function App() {

	return (
		<div className="App">
			<Provider store={appStore}>
				<Router>
					<ToastContainer />
					<Routing />
				</Router>
			</Provider>
		</div>
	);
}

export default App;
