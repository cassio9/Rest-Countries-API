import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import useSearchStore from "../useSearchStore";

const Main = () => {
	const inputSearch = useSearchStore((state) => state.country);
	const setInputSearch = useSearchStore((state) => state.setInputSearch);
	const setIsSearch = useSearchStore((state) => state.setIsSearch);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputSearch(e.target.value);
		//initial value of countries (12 countries) will be changed to Search value
		setIsSearch();
	};

	return (
		<div className="p-4 lg:min-w-[30rem] sm:min-w-[24rem] ">
			<label htmlFor="search" className="flex items-center relative">
				<SearchOutlinedIcon className="absolute left-4 text-DarkGray dark:text-white" />
				<input
					type="text"
					id="search"
					value={inputSearch}
					onChange={handleChange}
					placeholder="Search for a country..."
					className="shadow-xl w-full p-4  rounded-lg text-DarkGray px-12 dark:bg-DarkBlue dark:text-white focus:outline-none placeholder:dark:text-white"
				/>
			</label>
		</div>
	);
};

export default Main;
