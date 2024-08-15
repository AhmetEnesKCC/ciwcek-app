import React from "react";
import useCountryData from "../../state/countryData";
import useSelectedCountry from "../../state/selectedCountry";

const CountrySelect = () => {
  const { countryData } = useCountryData();

  const { selectedCountry, setSelectedCountry } = useSelectedCountry();

  return (
    <div>
      <label
        htmlFor="HeadlineAct"
        className="block text-sm font-medium text-gray-900"
      >
        Ulke Ismi
      </label>

      <select
        name="HeadlineAct"
        id="HeadlineAct"
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
        }}
        className="mt-1.5 w-full p-2 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
      >
        <option value="">Please select</option>
        {Object.keys(countryData ?? {})
          .filter((key) => key !== "Date")
          .map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CountrySelect;
