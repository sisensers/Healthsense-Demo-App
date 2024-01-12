// Import necessary dependencies and components
import { Button } from "@mui/material"; // Import Material-UI Button
import { ExecuteQuery } from "@sisense/sdk-ui";
import * as DM from "sisense/Schemas/healthsense-master";
import { Data, measures, filters } from "@sisense/sdk-data";
import ReportsBarChart from "./BarCharts/ReportsBarChart";

// ... (other imports)

interface AvailabilityChartProps {
  practiceFilter: string[];
  visitDateFilter: string[];
}

export default function AvailabilityChart({
  practiceFilter,
  visitDateFilter,
}: AvailabilityChartProps): JSX.Element {
  return (
    <div>
      <ExecuteQuery
        dataSource={DM.DataSource}
        dimensions={[DM.Healthsense.DayOfWeek]}
        measures={[measures.count(DM.Healthsense.PatientID, "Patients")]}
        filters={[
          filters.members(DM.Healthsense.PracticeName, practiceFilter),
          filters.members(DM.Healthsense.VisitDate, visitDateFilter),
        ]}
      >
        {(data: Data) => {
          console.log(data);
          const transformedData = TranslateSisenseDataToChartJS(data);
          return (
            <ReportsBarChart
              color="info"
              title="Occupancy"
              description="A breakdown of Practice availability by day of the week"
              date="Updated Monday"
              chart={transformedData}
            />
          );
        }}
      </ExecuteQuery>
    </div>
  );
}

interface AvailabilityChart {
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

  const transformedData: AvailabilityChart = {
    labels: dayNames,
    datasets: {
      label: "Patient Count",
      data: datasets,
    },
  };

  return transformedData;
}

// Event handlers for button clicks
const handleNewAppointmentClick = () => {
  // Handle logic for "New Appointment" button click
};

const handleRescheduleAppointmentClick = () => {
  // Handle logic for "Reschedule Appointment" button click
};
