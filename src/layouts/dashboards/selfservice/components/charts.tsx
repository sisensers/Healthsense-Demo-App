// File: charts.tsx

import React from "react";
import { ExecuteQuery, Chart, ThemeProvider, Table, DashboardWidget } from "@sisense/sdk-ui";
import { Data, measures, Filter } from "@sisense/sdk-data";
import * as DM from "sisense/Schemas/healthsense-master";

const theme = {
  chart: {
    textColor: "#3C3C44",
  },
  general: {
    brandColor: "#2196f3",
    primaryButtonTextColor: "white",
  },
  palette: {
    variantColors: ["#2196f3", "#0d47a1", "#050A30", "#7EC8E3"],
  },
  typography: {
    fontFamily: "roboto",
  },
};

// Update BarChartProps
interface BarChartProps {
  title: string;
  date: string;
  filters: Filter[]; // Add this line
}

// Update BarChart component
export const BarChart: React.FC<BarChartProps> = ({ title, date, filters }) => {
  return (
    <ExecuteQuery
      dataSource={DM.DataSource}
      dimensions={[DM.Healthsense.VisitDate.Years, DM.Healthsense.VisitDate.Months]}
      measures={[measures.count(DM.Healthsense.PatientID, "Total Quantity")]}
    >
      {(data: Data) => (
        <ThemeProvider theme={theme}>
          <DashboardWidget
            widgetOid={"659f732f19622d0033e7ec5a"}
            dashboardOid={"659494b119622d0033e7d75a"}
            filters={filters} // Update this line
            drilldownOptions={{
              drilldownDimensions: [DM.Healthsense.AgeRange, DM.Healthsense.Description],
            }}
          />
        </ThemeProvider>
      )}
    </ExecuteQuery>
  );
};

interface LineChartProps {
  title: string;
  date: string;
  filters: Filter[];
}

export const LineChart: React.FC<LineChartProps> = ({ title, date, filters }) => {
  return (
    <ExecuteQuery
      dataSource={DM.DataSource}
      dimensions={[DM.Healthsense.VisitDate.Years, DM.Healthsense.VisitDate.Months]}
      measures={[measures.sum(DM.Healthsense.InsuranceClaimAmount, "Total Revenue")]}
    >
      {(data: Data) => (
        <ThemeProvider theme={theme}>
          <DashboardWidget
            widgetOid={"659f73d519622d0033e7ec66"}
            dashboardOid={"656f7a6a19622d0033e7d69d"}
            filters={filters}
            drilldownOptions={{
              drilldownDimensions: [
                DM.Healthsense.AgeRange,
                DM.Doctor.Name,
                DM.Patient.PatientName,
              ],
            }}
          />
        </ThemeProvider>
      )}
    </ExecuteQuery>
  );
};

interface PieChartProps {
  title: string;
  date: string;
  filters: Filter[];
}

export const PieChart: React.FC<PieChartProps> = ({ title, date, filters }) => {
  return (
    <ExecuteQuery
      dataSource={DM.DataSource}
      dimensions={[DM.Healthsense.PracticeName]}
      measures={[measures.sum(DM.Healthsense.InsuranceClaimAmount, "Total Quantity")]}
    >
      {(data: Data) => (
        <ThemeProvider theme={theme}>
          <DashboardWidget
            widgetOid={"659f72d619622d0033e7ec58"}
            dashboardOid={"659494b119622d0033e7d75a"}
            filters={filters}
            drilldownOptions={{
              drilldownDimensions: [
                DM.Healthsense.Description,
                DM.Doctor.Name,
                DM.Patient.PatientName,
              ],
            }}
          />
        </ThemeProvider>
      )}
    </ExecuteQuery>
  );
};

interface ColumnChartProps {
  title: string;
  date: string;
  filters: Filter[];
}

export const ColumnChart: React.FC<ColumnChartProps> = ({ title, date, filters }) => {
  return (
    <ExecuteQuery
      dataSource={DM.DataSource}
      dimensions={[DM.Healthsense.PatientID]}
      measures={[measures.sum(DM.Healthsense.InsuranceClaimAmount, "Total Quantity")]}
    >
      {(data: Data) => (
        <ThemeProvider theme={theme}>
          <DashboardWidget
            widgetOid={"659f72a219622d0033e7ec56"}
            dashboardOid={"659494b119622d0033e7d75a"}
            filters={filters}
            drilldownOptions={{
              drilldownDimensions: [
                DM.Healthsense.PracticeName,
                DM.Patient.Gender,
                DM.Healthsense.AgeRange,
              ],
            }}
          />
        </ThemeProvider>
      )}
    </ExecuteQuery>
  );
};

interface PolarChartProps {
  title: string;
  date: string;
  filters: Filter[];
}

export const PolarChart: React.FC<PolarChartProps> = ({ title, date, filters }) => {
  return (
    <ExecuteQuery
      dataSource={DM.DataSource}
      dimensions={[DM.Healthsense.PracticeName]}
      measures={[measures.sum(DM.Healthsense.InsuranceClaimAmount, "Total Quantity")]}
    >
      {(data: Data) => (
        <ThemeProvider theme={theme}>
          <DashboardWidget
            widgetOid={"6595983f19622d0033e7d7d0"}
            dashboardOid={"659595b919622d0033e7d7b2"}
            filters={filters}
            drilldownOptions={{
              drilldownDimensions: [
                DM.Healthsense.AgeRange,
                DM.Doctor.Name,
                DM.Doctor.Specialty,
                DM.Patient.Gender,
              ],
            }}
          />
        </ThemeProvider>
      )}
    </ExecuteQuery>
  );
};

interface TableChartProps {
  title: string;
  date: string;
  filters: Filter[];
}

export const TableChart: React.FC<TableChartProps> = ({ title, date, filters }) => {
  return (
    <ExecuteQuery
      dataSource={DM.DataSource}
      dimensions={[DM.Healthsense.PracticeName]}
      measures={[measures.sum(DM.Healthsense.InsuranceClaimAmount, "Total Quantity")]}
    >
      {(data: Data) => (
        <ThemeProvider theme={theme}>
          <DashboardWidget
            widgetOid={"6595d4d119622d0033e7d85a"}
            dashboardOid={"659595b919622d0033e7d7b2"}
            filters={filters}
            drilldownOptions={{
              drilldownDimensions: [
                DM.Healthsense.AgeRange,
                DM.Doctor.Name,
                DM.Doctor.Specialty,
                DM.Patient.Gender,
              ],
            }}
          />
        </ThemeProvider>
      )}
    </ExecuteQuery>
  );
};
// Add more components as needed...
