import { create } from "zustand";

interface SearchStore {
	country: string;
	region: string;
	setCountry: (value: string) => void;
	setRegion: (value: string) => void;
}

const useSearchStore = create<SearchStore>()((set) => ({
	country: "",
	region: "",
	setCountry: (value) => set((state) => ({ country: value })),
	setRegion: (value) => set((state) => ({ region: value })),
}));

export default useSearchStore;
