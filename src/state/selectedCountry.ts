import { create } from "zustand";
import { devtools } from "zustand/middleware";

type StateType = {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
};

const useSelectedCountry = create<StateType>()(
  devtools((set) => ({
    selectedCountry: "Turkey",
    setSelectedCountry: (country) => set({ selectedCountry: country }),
  }))
);

export default useSelectedCountry;
