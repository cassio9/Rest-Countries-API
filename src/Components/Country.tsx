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
	const handleDetail = () => {
		setIsDetail(name);
	};

	return (
		<div
			className="bg-white rounded-lg shadow-md w-60 flex flex-col h-full cursor-pointer"
			onClick={handleDetail}>
			<img src={flag} alt={`${name} flag`} className="rounded-t-lg w-full flex-1" />
			<div className="p-4 mb-4 ">
				<h1 className="mb-4 font-extrabold">{name}</h1>
				<p className="">
					<span className="font-extrabold">Population:</span> {pop.toLocaleString()}
				</p>
				<p>
					<span className="font-extrabold">Region:</span> {region}
				</p>
				<p>
					<span className="font-extrabold">Capital:</span> {capital}
				</p>
			</div>
		</div>
	);
};

export default Country;
