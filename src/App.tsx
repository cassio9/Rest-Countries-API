import "./App.css";
import Countries from "./Components/Countries";
import DetailCountry from "./Components/DetailCountry";
import FilterCountries from "./Components/FilterCountries";
import MainSearch from "./Components/MainSearch";
import Nav from "./Components/Nav";
import useSearchStore from "./useSearchStore";

function App() {
	const isDetail = useSearchStore((state) => state.isDetail);

	return (
		<div className="font-Nunito bg-VeryLightGray dark:bg-VeryDarkBlueBG dark:text-white text-VeryDarkBlue min-h-screen max-h-fit mx-auto">
			<Nav />
			{!isDetail.open ? (
				<div>
					<div className="sm:flex sm:justify-between max-w-6xl mx-auto">
						<MainSearch />
						<FilterCountries />
					</div>
					<Countries />
				</div>
			) : (
				<DetailCountry />
			)}
		</div>
	);
}

export default App;
