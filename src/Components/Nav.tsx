import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Nav = () => {
	return (
		<div className="flex justify-between items-center h-20 shadow-lg p-4 mb-10 ">
			<div className="flex justify-between max-w-6xl w-full mx-auto">
				<h1 className="font-extrabold text-xl">Where in the world?</h1>
				<p className="cursor-pointer">
					<span className="pr-2">
						<DarkModeOutlinedIcon />
					</span>
					Dark Mode
				</p>
			</div>
		</div>
	);
};

export default Nav;
