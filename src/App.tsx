import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";
import Papa from "papaparse";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
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

            console.log(columnsData);
          },
        });
      })
      .catch((error) => console.error("Error fetching the CSV file:", error));
  }, []);

  return (
    <div>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:bg-blue-100 focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 dark:focus:bg-blue-800/30 dark:focus:text-blue-400"
      >
        Ghost
      </button>
      <button className="bg-blue-400 p-2">hello</button>
    </div>
  );
}

export default App;
