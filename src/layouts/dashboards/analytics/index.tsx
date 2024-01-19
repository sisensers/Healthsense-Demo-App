import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import RevenueStatisticsCard from "examples/Cards/StatisticsCards/RevenueStatisticsCard";
import BookingCard from "examples/Cards/BookingCard";

// Anaytics dashboard components
import SalesByCountry from "layouts/dashboards/analytics/components/SalesByCountry";

// Data
import reportsBarChartData from "layouts/dashboards/analytics/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboards/analytics/data/reportsLineChartData";

// Images
import booking1 from "assets/images/ecommerce/Adidas.png";
import booking2 from "assets/images/ecommerce/ColumbiaShoes.png";
import booking3 from "assets/images/products/VersaceMedusaHeadHighTopSneakers.png";

import DayOfWeek from "sisense/Charts/DayOfWeek";
import SalesByAgeLine from "sisense/Charts/SalesByAgeLine";
import { DateRangeFilterTile, ThemeProvider } from "@sisense/sdk-ui";
import { Data, filters, measures } from "@sisense/sdk-data";
import * as DM from "sisense/Schemas/healthsense-master";
import { useState } from "react";
import CustomerStatisticsCard from "examples/Cards/StatisticsCards/CustomerStatisticsCard";
import CostStatisticsCard from "examples/Cards/StatisticsCards/CostStatisticsCard";
import OrderStatisticsCard from "examples/Cards/StatisticsCards/OrdersStatisticsCard";

function Analytics(): JSX.Element {
  const { sales, tasks } = reportsLineChartData;
  const [dateRangeFilter, setDateRangeFilter] = useState(
    filters.dateRange(DM.Healthsense.VisitDate.Days)
  );

  const theme = {
    chart: {
      textColor: "black",
    },
    general: {
      brandColor: "#2196f3",
      primaryButtonTextColor: "black",
    },
    palette: {
      variantColors: ["#2196f3", "#0d47a1", "#050A30", "#7EC8E3"],
    },
    typography: {
      fontFamily: "roboto",
    },
  };
  // Action buttons for the BookingCard
  const actionButtons = (
    <>
      <Tooltip title="Refresh" placement="bottom">
        <MDTypography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">refresh</Icon>
        </MDTypography>
      </Tooltip>
      <Tooltip title="Edit" placement="bottom">
        <MDTypography variant="body1" color="info" lineHeight={1} sx={{ cursor: "pointer", mx: 3 }}>
          <Icon color="inherit">edit</Icon>
        </MDTypography>
      </Tooltip>
    </>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <div>
            <ThemeProvider theme={theme}>
              <DateRangeFilterTile
                title="Date Range"
                dataSource={DM.DataSource}
                attribute={DM.Healthsense.VisitDate.Days}
                filter={dateRangeFilter}
                onChange={(filter) => {
                  setDateRangeFilter(filter);
                }}
              />
            </ThemeProvider>
          </div>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <CustomerStatisticsCard
                title={"Claims Processed"}
                icon={"leaderboard"}
                filters={dateRangeFilter}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <RevenueStatisticsCard
                title={"Claims Reimbursed"}
                icon={"store"}
                filters={dateRangeFilter}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <CostStatisticsCard
                title={"Claims Outstanding"}
                icon={"warning"}
                filters={dateRangeFilter}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <OrderStatisticsCard
                title={"Patient Payments"}
                filters={dateRangeFilter}
                icon={"timeline"}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox py={3}>
        <Grid container>
          <SalesByCountry filters={dateRangeFilter} />
        </Grid>
        <MDBox mt={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <DayOfWeek filters={dateRangeFilter} />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <MDBox mb={3}>
                <SalesByAgeLine filters={dateRangeFilter} />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Analytics;
