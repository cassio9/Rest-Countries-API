import { useEffect, useState } from "react";
import useSearchStore from "../useSearchStore";
import Country from "./Country";

const Countries = () => {
	const data = useSearchStore((state) => state.data);
	const state = useSearchStore((state) => state);
	const inputSearch = useSearchStore((state) => state.country);
	const region = useSearchStore((state) => state.region);
	const isSearch = useSearchStore((state) => state.isSearch);

	console.log(state);

	const [dataFiltered, setDataFiltered] = useState<any[] | null>(null);

	//change countries according to inputs, or set initial render (12 countries)
	useEffect(() => {
		const filterData = () => {
			if (region == "") {
				const result = data.filter((country) => {
					if (inputSearch === "") return country;
					return country.name.common.toLowerCase().includes(inputSearch.toLowerCase());
				});
				return result;
			} else if (inputSearch == "") {
				const result = data.filter((country) => country.region === region);
				return result;
			} else {
				const result = data
					.filter((country) => {
						if (inputSearch === "") return country;
						return country.name.common.toLowerCase().includes(inputSearch.toLowerCase());
					})
					.filter((country) => country.region === region);
				return result;
			}
		};
		setDataFiltered(filterData());
	}, [inputSearch, region]);

	return (
		<section className="flex dark:bg-VeryDarkBlueBG w-full gap-16 justify-center flex-wrap mx-auto max-w-7xl p-4 items-stretch">
			{data && isSearch
				? dataFiltered?.map((country) => (
						<div key={country.name.common}>
							<Country
								name={country.name.common}
								flag={country.flags.svg}
								capital={country.capital}
								region={country.region}
								pop={country.population}
							/>
						</div>
				  ))
				: data.slice(0, 12).map((country) => (
						<div key={country.name.common}>
							<Country
								name={country.name.common}
								flag={country.flags.svg}
								capital={country.capital}
								region={country.region}
								pop={country.population}
							/>
						</div>
				  ))}
		</section>
	);
};

export default Countries;
