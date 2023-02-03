import useSearchStore from "../useSearchStore";

interface Props {
	name: string;
	flag: string;
	capital: string;
	region: string;
	pop: string;
}

const Country = ({ name, flag, capital, region, pop }: Props) => {
	const setIsDetail = useSearchStore((state) => state.setIsDetail);

	//Get the name of country will be detailed
	const handleDetail = () => {
		setIsDetail(name);
	};

	return (
		<section
			className="bg-white dark:bg-DarkBlue dark:text-white rounded-xl shadow-md w-60 flex flex-col h-full cursor-pointer"
			onClick={handleDetail}>
			<img
				src={flag}
				alt={`${name} flag`}
				className="rounded-t-lg w-full flex-1 object-cover object-center max-h-[10rem]"
			/>
			<div className="p-4 mb-4 ">
				<h2 className="mb-4 font-extrabold">{name}</h2>
				<p>
					<span className="font-extrabold">Population:</span> {pop.toLocaleString()}
				</p>
				<p>
					<span className="font-extrabold">Region:</span> {region}
				</p>
				<p>
					<span className="font-extrabold">Capital:</span> {capital}
				</p>
			</div>
		</section>
	);
};

export default Country;
