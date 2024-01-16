import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultLineChart from "sisense/Charts/LineCharts/DefaultLineChart";
import GradientLineChart from "sisense/Charts/LineCharts/GradientLineChart";
import VerticalBarChart from "sisense/Charts/BarCharts/VerticalBarChart";
import HorizontalBarChart from "sisense/Charts/BarCharts/HorizontalBarChart";
import MixedChart from "sisense/Charts/MixedChart";
import BubbleChart from "sisense/Charts/BubbleChart";
import DefaultDoughnutChart from "sisense/Charts/DoughnutCharts/DefaultDoughnutChart";
import RadarChart from "sisense/Charts/RadarChart";
import PolarChart from "sisense/Charts/PolarChart";

// Dropdown
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

// Sisense
import { ExecuteQuery } from "@sisense/sdk-ui";
import * as DM from "sisense/Schemas/healthsense-master";
import { Data, filters, measures } from "@sisense/sdk-data";
import { useState } from "react";
import { DateRangeFilterTile, ThemeProvider } from "@sisense/sdk-ui";
import BarChart from "../../../sisense/Charts/SisenseCharts/BarChart";
import LineChart from "../../../sisense/Charts/SisenseCharts/LineChart";
import PieChart from "../../../sisense/Charts/SisenseCharts/PieChart";
import ChartJS from "../../../sisense/Charts/SisenseCharts/ChartJs";

//Nivo
import NivoLine from "../../../sisense/Charts/NivoCharts/NivoLineExample";
import NivoBump from "../../../sisense/Charts/NivoCharts/NivoBumpExample";
import NivoHeapMap from "../../../sisense/Charts/NivoCharts/NivoHeapMapExample";
import NivoRadialBar from "../../../sisense/Charts/NivoCharts/NivoRadialBarExample";

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

function DeveloperExample(): JSX.Element {
  const [dateRangeFilter, setDateRangeFilter] = useState(
    filters.dateRange(DM.Healthsense.VisitDate.Days)
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox mb={3}>
          <MDTypography variant="h5">Filters</MDTypography>
          <MDTypography variant="button" color="text">
            Sisense Filters that easily interact with all visualizations on page.
          </MDTypography>
        </MDBox>
        <MDBox mb={6}>
          <div style={{ marginBottom: "10px" }}>
            <DateRangeFilterTile
              title="Date Range"
              dataSource={DM.DataSource}
              attribute={DM.Healthsense.VisitDate.Days}
              filter={dateRangeFilter}
              onChange={(filter) => {
                setDateRangeFilter(filter);
              }}
            />
          </div>
        </MDBox>
        <MDBox mb={6}>
          <div style={{ top: "10px" }}>
            <MDBox mb={3}>
              <MDTypography variant="h5">ExecuteQuery Component</MDTypography>
              <MDTypography variant="button" color="text">
                ExecuteQuery allows you to run a query and access the results. Useful when you want
                to render multiple charts using same data or render the data with your own
                visualizations.
              </MDTypography>
            </MDBox>
            <ThemeProvider theme={theme}>
              <BarChart filters={dateRangeFilter} />
            </ThemeProvider>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <ThemeProvider theme={theme}>
              <LineChart filters={dateRangeFilter} />
            </ThemeProvider>
          </div>
        </MDBox>
        <MDBox mb={6}>
          <div style={{ marginBottom: "10px" }}>
            <ThemeProvider theme={theme}>
              <PieChart filters={dateRangeFilter} />
            </ThemeProvider>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <MDBox mb={3}>
              <MDTypography variant="h5">Custom Chart Component</MDTypography>
              <MDTypography variant="button" color="text">
                This example demonstrates how to utilize the ExecuteQuery component to visualize
                data from Sisense in a custom chart visualization.
              </MDTypography>
            </MDBox>
            <ChartJS filters={dateRangeFilter} />
          </div>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DeveloperExample;
