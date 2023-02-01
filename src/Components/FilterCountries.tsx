import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import useSearchStore from "../useSearchStore";
const FilterCountries = () => {
	const region = useSearchStore((state) => state.region);
	const setRegion = useSearchStore((state) => state.setRegion);

	return (
		<form className="p-4">
			<label htmlFor="region" className="relative">
				<select
					name="region"
					id="regionFilter"
					value={region}
					onChange={(e) => setRegion(e.target.value)}
					className="w-1/2 bg-white shadow-lg  p-4 appearance-none relative">
					<option value="africa">Africa</option>
					<option value="america">America</option>
					<option value="asia">Asia</option>
					<option value="europe">Europe</option>
					<option value="oceania">Oceania</option>
				</select>
				<ExpandMoreOutlinedIcon className="absolute right-4 top-0" />
			</label>
		</form>
	);
};

export default FilterCountries;
