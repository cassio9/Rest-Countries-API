import { useEffect, useState } from "react";
import useSearchStore from "../useSearchStore";
import Country from "./Country";

const Countries = () => {
	const data = useSearchStore((state) => state.data);
	const inputSearch = useSearchStore((state) => state.country);
	const region = useSearchStore((state) => state.region);
	const isSearch = useSearchStore((state) => state.isSearch);

	const [dataFiltered, setDataFiltered] = useState<any[] | null>(null);

	useEffect(() => {
		const filterData = () => {
			if (region == "") {
				const result = data.filter((country) => {
					if (inputSearch === "") return country;
					return country.name.toLowerCase().includes(inputSearch.toLowerCase());
				});
				return result;
			} else if (inputSearch == "") {
				const result = data.filter((country) => country.region === region);
				return result;
			} else {
				const result = data
					.filter((country) => {
						if (inputSearch === "") return country;
						return country.name.toLowerCase().includes(inputSearch.toLowerCase());
					})
					.filter((country) => country.region === region);
				return result;
			}
		};
		setDataFiltered(filterData());
	}, [inputSearch, region]);

	return (
		<div className="flex w-full gap-16 justify-center flex-wrap mx-auto p-4 items-stretch">
			{data && isSearch
				? dataFiltered?.map((country) => (
						<div key={country.name}>
							<Country
								name={country.name}
								flag={country.flag}
								capital={country.capital}
								region={country.region}
								pop={country.population}
							/>
						</div>
				  ))
				: data.slice(0, 8).map((country) => (
						<div key={country.name}>
							<Country
								name={country.name}
								flag={country.flag}
								capital={country.capital}
								region={country.region}
								pop={country.population}
							/>
						</div>
				  ))}
		</div>
	);
};

export default Countries;
