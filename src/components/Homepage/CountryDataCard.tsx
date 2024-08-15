import Chart from "react-apexcharts";
import useCountryData from "../../state/countryData";
import { useState } from "react";

const CountryDataCard = ({ countryName }: { countryName: string }) => {
  const { countryData } = useCountryData();

  return (
    <div>
      <h2>{countryName}</h2>
      <Chart
        series={[
          {
            name: "Case Count",
            data: (countryData?.[countryName] as number[]) ?? [],
          },
        ]}
        type="line"
        width={700}
        height={400}
        options={{
          chart: {
            type: "line",
          },
          xaxis: {
            categories: countryData?.["Date"] as string[],
          },
        }}
      />
    </div>
  );
};

export default CountryDataCard;
