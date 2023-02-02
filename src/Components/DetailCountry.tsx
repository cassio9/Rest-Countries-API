import useSearchStore from "../useSearchStore";

const DetailCountry = () => {
	const data = useSearchStore((state) => state.data);
	const isDetail = useSearchStore((state) => state.isDetail);

	const displayDetail = data.filter((country) => country.name === isDetail.country);

	const {
		name,
		flag,
		population,
		region,
		capital,
		currencies,
		languages,
		subregion,
		topLevelDomain,
		nativeName,
		borders,
	} = displayDetail[0];

	const filteredCurrencies = currencies
		.map((currency: { code: string; name: string; symbol: string }) => currency.name)
		.join(", ");

	const filteredLanguages = languages
		.map(
			(language: { iso639_1: string; iso639_2: string; name: string; nativeName: string }) =>
				language.name
		)
		.join(", ");

	const filteredBorders = borders.join(", ");

	console.log(filteredBorders);

	return (
		<div className="px-8 flex flex-col items-start max-w-lg md:max-w-7xl mr-auto md:mx-auto ">
			<div className="px-8">
				<button className="px-12 py-4 bg-VeryLightGray shadow-lg max-w-sm mx-auto md:max-w-8xl ">
					Back
				</button>
			</div>
			<div className="flex flex-col md:flex-row gap-8  p-8 items-center md:items-center max-w-md md:max-w-6xl">
				<img src={flag} className="md:flex-1 min-w-[250px] w-full md:max-w-xl md:h-fit" alt="" />
				<div className="flex flex-col flex-2 max-w-lg mx-auto">
					<h1 className="text-3xl font-extrabold py-4">{name}</h1>
					<div className="flex flex-col gap-8 md:flex-row md:items-baseline max-w-lg justify-between">
						<div className="flex flex-col gap-2">
							<p className="">
								<span className="font-extrabold">Native Name:</span> {nativeName}
							</p>
							<p className="">
								<span className="font-extrabold">Population:</span> {population.toLocaleString()}
							</p>
							<p>
								<span className="font-extrabold">Region:</span> {region}
							</p>
							<p>
								<span className="font-extrabold">Sub Region:</span> {subregion}
							</p>
							<p>
								<span className="font-extrabold">Capital:</span> {capital}
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<p>
								<span className="font-extrabold">Top Level Domain:</span> {topLevelDomain}
							</p>
							<p>
								<span className="font-extrabold">Currencies:</span> {filteredCurrencies}
							</p>
							<p>
								<span className="font-extrabold">Languages:</span> {filteredLanguages}
							</p>
						</div>
					</div>
					<p className="py-8">
						<span className="font-extrabold">Border Countries:</span> {filteredBorders}
					</p>
				</div>
			</div>
		</div>
	);
};

export default DetailCountry;
