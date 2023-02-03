import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useEffect, useState } from "react";

const Nav = () => {
	const [DarkTheme, setDarkTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : false
	);

	//Dark Theme
	useEffect(() => {
		if (DarkTheme) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "IloveYou");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.removeItem("theme");
		}
	}, [DarkTheme]);

	return (
		<div className="flex justify-between items-center h-20 shadow-lg p-4 mb-10 dark:bg-DarkBlue">
			<div className="flex justify-between max-w-6xl w-full mx-auto">
				<h1 className="font-extrabold text-xl">Where in the world?</h1>
				<button className="cursor-pointer" onClick={() => setDarkTheme((prev) => !prev)}>
					<span className="pr-2">
						<DarkModeOutlinedIcon />
					</span>
					Dark Mode
				</button>
			</div>
		</div>
	);
};

export default Nav;
