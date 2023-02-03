import useSearchStore from "../useSearchStore";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const DetailCountry = () => {
	const data = useSearchStore((state) => state.data);
	const isDetail = useSearchStore((state) => state.isDetail);
	const setIsDetail = useSearchStore((state) => state.setIsDetail);

	const displayDetail = data.filter((country) => country.name.common === isDetail.country);

	const {
		name,
		flags,
		population,
		region,
		capital,
		currencies,
		languages,
		subregion,
		tld,
		borders,
	} = displayDetail[0];

	function getCurrencies() {
		const cur: { name: string; symbol: string }[] = Object.values(currencies);
		let currenciesFiltered = cur.map((curr) => curr.name);
		return currenciesFiltered.join(", ");
	}

	function getLanguages() {
		const lan = Object.values(languages);
		return lan.join(", ");
	}

	function getBorders() {
		const bordersFiltered = borders.map((code: string) => {
			return data
				.filter((country) => {
					return country.cca3 === code;
				})
				.map((country) => country.name.common)
				.join(", ");
		});
		return bordersFiltered;
	}

	return (
		<div className="px-2 flex flex-col items-start max-w-lg md:max-w-7xl mr-auto md:mx-auto dark:text-white">
			<div className="px-8 xl:pl-[5.5rem]  mr-auto">
				<button
					className="px-6 py-4 bg-VeryLightGray shadow-lg  mx-auto md:max-w-8xl flex gap-4 items-center dark:bg-DarkBlue rounded-lg"
					onClick={() => setIsDetail("")}>
					<span>
						<KeyboardBackspaceIcon />
					</span>
					Back
				</button>
			</div>
			<div className="flex flex-col md:flex-row gap-8  p-8 items-center md:items-center  md:max-w-6xl mx-auto">
				<img
					src={flags.svg}
					className="md:flex-1 min-w-[250px] max-w-[300px] mr-auto lg:min-w-[400px] lg:h-full w-full md:max-w-2xl md:h-fit max-h-[200px] md:max-h-[420px]"
					alt=""
				/>
				<div className="flex flex-col flex-2 max-w-lg mx-auto">
					<h1 className="text-3xl font-extrabold py-4">{name.common}</h1>
					<div className="flex flex-col gap-8 md:flex-row md:items-baseline max-w-lg justify-between">
						<div className="flex flex-col gap-2 min-w-[200px]">
							<p className="">
								<span className="font-extrabold">Native Name:</span>{" "}
								{name.nativeName
									? name.nativeName[Object.keys(name.nativeName)[0]].common
									: name.common}
							</p>
							<p className="">
								<span className="font-extrabold">Population:</span> {population.toLocaleString()}
							</p>
							<p>
								<span className="font-extrabold">Region:</span> {region}
							</p>
							<p>
								<span className="font-extrabold">Sub Region:</span> {subregion ? subregion : "None"}
							</p>
							<p>
								<span className="font-extrabold">Capital:</span>{" "}
								{capital ? capital.join(", ") : "None"}
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<p>
								<span className="font-extrabold">Top Level Domain:</span> {tld}
							</p>
							<p>
								<span className="font-extrabold">Currencies:</span>{" "}
								{currencies ? getCurrencies() : "None"}
							</p>
							<p>
								<span className="font-extrabold">Languages:</span>{" "}
								{languages ? getLanguages() : "None"}
							</p>
						</div>
					</div>
					<div className="py-8 ">
						<div className="inline-flex gap-2 items-center justify-start flex-wrap ">
							<span className="font-extrabold">Border Countries: </span>
							{borders
								? getBorders().map((country: string, i: number) => (
										<div key={i} className=" shadow-lg rounded-md p-2 dark:bg-DarkBlue text-sm ">
											{country}
										</div>
								  ))
								: "None"}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailCountry;
