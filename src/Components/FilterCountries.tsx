import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useRef } from "react";
import useSearchStore from "../useSearchStore";

const FilterCountries = () => {
	const region = useSearchStore((state) => state.region);
	const setRegion = useSearchStore((state) => state.setRegion);
	const setIsSearch = useSearchStore((state) => state.setIsSearch);
	const ref = useRef(null);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setRegion(e.target.value);
		setIsSearch();
	};

	return (
		<div className="p-4">
			<label htmlFor="region" className="relative">
				<select
					name="region"
					id="region"
					value={region}
					onChange={handleChange}
					placeholder="Filter by Region"
					className={` w-1/2 sm:w-full min-w-[200px] bg-white shadow-lg  py-4 px-4 pr-12 rounded-lg`}>
					<option className="text-VeryLightGray" hidden>
						Filter by Region
					</option>
					<option value="Africa">Africa</option>
					<option value="Americas">Americas</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</label>
		</div>
	);
};

export default FilterCountries;
