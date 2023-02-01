import "./App.css";
import FilterCountries from "./Components/FilterCountries";
import MainSearch from "./Components/MainSearch";
import Nav from "./Components/Nav";

function App() {
	return (
		<div className="font-Nunito bg-VeryLightGray text-VeryDarkBlue min-h-screen max-h-fit">
			<Nav />
			<MainSearch />
			<FilterCountries />
		</div>
	);
}

export default App;
