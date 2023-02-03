import { create } from "zustand";
import axios from "axios";

interface SearchStore {
	country: string;
	region: string;
	isSearch: boolean;
	data: any[];
	dataFiltered: any[];
	isDetail: { open: boolean; country: string };
	setInputSearch: (value: string) => void;
	setDataFiltered: (value: any[]) => void;
	setRegion: (value: string) => void;
	setIsSearch: () => void;
	setIsDetail: (value: string) => void;
	fetch: () => Promise<void>;
}

const useSearchStore = create<SearchStore>()((set) => ({
	country: "",
	region: "",
	isSearch: false,
	data: [],
	dataFiltered: [],
	isDetail: { open: false, country: "" },
	setInputSearch: (value) => set({ country: value }),
	setDataFiltered: (value) => set({ dataFiltered: value }),
	setRegion: (value) => set({ region: value }),
	setIsSearch: () => set({ isSearch: true }),
	setIsDetail: (value) =>
		set((state) => ({ isDetail: { open: !state.isDetail.open, country: value } })),
	fetch: async () => {
		const response = await axios.get("../data.json");
		set((state) => ({ data: (state.data = response.data) }));
	},
}));

//fetch data
useSearchStore.getState().fetch();

export default useSearchStore;
