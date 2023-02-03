import useSearchStore from "../useSearchStore";

const FilterCountries = () => {
	const region = useSearchStore((state) => state.region);
	const setRegion = useSearchStore((state) => state.setRegion);
	const setIsSearch = useSearchStore((state) => state.setIsSearch);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setRegion(e.target.value);
		//initial value of countries (12 countries) will be changed to Search value
		setIsSearch();
	};

	return (
		<section className="p-4">
			<label htmlFor="region" className="relative">
				<select
					aria-label="filterByRegion"
					name="region"
					id="region"
					value={region}
					onChange={handleChange}
					placeholder="Filter by Region"
					className=" w-1/2 sm:w-full min-w-[200px] bg-white shadow-lg  py-4 px-4 pr-12 rounded-lg text-DarkGray dark:bg-DarkBlue dark:text-white focus:outline-none">
					<option hidden>Filter by Region</option>
					<option value="Africa">Africa</option>
					<option value="Americas">Americas</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</label>
		</section>
	);
};

export default FilterCountries;
