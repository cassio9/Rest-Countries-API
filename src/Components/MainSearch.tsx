import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useEffect } from "react";
import useSearchStore from "../useSearchStore";

const Main = () => {
	const inputSearch = useSearchStore((state) => state.country);
	const setInputSearch = useSearchStore((state) => state.setInputSearch);
	const setIsSearch = useSearchStore((state) => state.setIsSearch);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputSearch(e.target.value);
		setIsSearch();
	};

	return (
		<div className="p-4 min-w-[30rem] ">
			<label htmlFor="search" className="flex items-center relative">
				<SearchOutlinedIcon className="absolute left-4 text-DarkGray" />
				<input
					type="text"
					id="search"
					value={inputSearch}
					onChange={handleChange}
					placeholder="Search for a country..."
					className="shadow-xl w-full p-4  rounded-lg text-DarkGray px-12 "
				/>
			</label>
		</div>
	);
};

export default Main;
