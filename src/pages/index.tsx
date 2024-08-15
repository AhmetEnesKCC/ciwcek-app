import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";
import Papa from "papaparse";
import { useLocation } from "react-router-dom";
import useCountryData from "../state/countryData";
import Chart from "react-apexcharts";
import CountryDataCard from "../components/Homepage/CountryDataCard";
import CountrySelect from "../components/Homepage/CountrySelect";
import useSelectedCountry from "../state/selectedCountry";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function IndexPage() {
  const location = useLocation();

  const { setCountryData, countryData } = useCountryData();

  const { selectedCountry } = useSelectedCountry();

  useEffect(() => {
    window.HSStaticMethods?.autoInit();
  }, [location.pathname]);

  useEffect(() => {
    fetch("/data.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          // CSV dosyasında başlık varsa bunu true yapın
          skipEmptyLines: true,
          complete: function (results) {
            const data: any = results.data;

            // Sütunları ve her sütunun altındaki verileri saklayacağımız bir nesne
            const columnsData: any = {};

            // Sütun başlıklarını kullanarak veri yapısını oluştur
            if (data.length > 0) {
              Object.keys(data?.[0]).forEach((key) => {
                columnsData[key] = data.map((row: any) => row[key]);
              });
            }

            setCountryData(columnsData);
          },
        });
      })
      .catch((error) => console.error("Error fetching the CSV file:", error));
  }, []);

  return (
    <div>
      <div className="flex items-center flex-col mx-auto w-max">
        <CountrySelect />
        <CountryDataCard countryName={selectedCountry} />
      </div>
    </div>
  );
}

export default IndexPage;
