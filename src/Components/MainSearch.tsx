import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import useSearchStore from "../useSearchStore";

const Main = () => {
	const inputSearch = useSearchStore((state) => state.country);
	const setCountry = useSearchStore((state) => state.setCountry);

	console.log(inputSearch);
	return (
		<div className="p-4">
			<label htmlFor="search" className="flex items-center relative">
				<SearchOutlinedIcon className="absolute left-4 text-DarkGray" />
				<input
					type="text"
					id="search"
					value={inputSearch}
					onChange={(e) => setCountry(e.target.value)}
					placeholder="Search for a country..."
					className="shadow-xl w-full p-4  rounded-lg text-DarkGray px-12"
				/>
			</label>
		</div>
	);
};

export default Main;
