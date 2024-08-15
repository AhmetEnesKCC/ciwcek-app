import { create } from "zustand";
import { devtools } from "zustand/middleware";

type StateType = {
  countryData: null | Record<"Date" | string, string[] | number[]>;
  setCountryData: (data: StateType["countryData"]) => void;
};

const useCountryData = create<StateType>()(
  devtools((set) => ({
    countryData: null,
    setCountryData: (data) => set({ countryData: data }),
  }))
);

export default useCountryData;
