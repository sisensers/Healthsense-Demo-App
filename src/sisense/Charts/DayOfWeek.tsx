// Import necessary dependencies and components

// Sisense
import { ExecuteQuery } from "@sisense/sdk-ui";
import * as DM from "sisense/Schemas/healthsense-master";
import { Data, measures, filters, Filter } from "@sisense/sdk-data";
import ReportsBarChart from "./BarCharts/ReportsBarChart";

// ... (other imports)

interface Props {
  filters: Filter;
}

export default function DayOfWeek({ filters }: Props): JSX.Element {
  return (
    <ExecuteQuery
      dataSource={DM.DataSource}
      dimensions={[DM.Healthsense.DayOfWeek]}
      measures={[measures.count(DM.Healthsense.PatientID, "Revenue")]}
      filters={[filters]}
    >
      {(data: Data) => {
        console.log(data);
        const transformedData = TranslateSisenseDataToChartJS(data);
        return (
          <ReportsBarChart
            color="info"
            title="Claims Submitted"
            description="This chart shows the volume of claims processed by day of week"
            date="Updated Monday"
            chart={transformedData}
          />
        );
      }}
    </ExecuteQuery>
  );
}

interface daysOfWeek {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  };
}

interface Row {
  [key: string]: any;
}

function TranslateSisenseDataToChartJS(data: Data) {
  const dayNames: Array<string> = ["M", "T", "W", "T", "F", "S", "S"];
  const dayNamesFull: Array<string> = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const datasets: Array<number> = [0, 0, 0, 0, 0, 0, 0];
  //Set matching data. Add function here in real life
  data.rows.forEach((row: Row) => {
    if (row[0].text === "monday") {
      datasets[0] = row[1].data;
    }
    if (row[0].text === "tuesday") {
      datasets[1] = row[1].data;
    }
    if (row[0].text === "wednesday") {
      datasets[2] = row[1].data;
    }
    if (row[0].text === "thursday") {
      datasets[3] = row[1].data;
    }
    if (row[0].text === "friday") {
      datasets[4] = row[1].data;
    }
    if (row[0].text === "saturday") {
      datasets[5] = row[1].data;
    }
    if (row[0].text === "sunday") {
      datasets[6] = row[1].data;
    }
  });

  const transformedData: daysOfWeek = {
    labels: dayNames,
    datasets: {
      label: "Revenue",
      data: datasets,
    },
  };

  return transformedData;
}
