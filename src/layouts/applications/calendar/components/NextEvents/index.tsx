/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components
import DefaultItem from "examples/Items/DefaultItem";

function NextEvents(): JSX.Element {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Upcoming Events
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <DefaultItem
          color="dark"
          icon="paid"
          title="Healthcare Conference"
          description="27 March 2024, at 12:30 PM"
        />
        <MDBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="notifications"
            title="Meeting with Marry"
            description="24 March 2024, at 10:00 PM"
          />
        </MDBox>
        <MDBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="menu_book"
            title="Nurses Huddle"
            description="25 March 2024, at 9:30 AM"
          />
        </MDBox>
        <MDBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="local_shipping"
            title="Inventory"
            description="25 March 2024, at 2:00 PM"
          />
        </MDBox>
        <MDBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="palette"
            title="Update Schedule"
            description="26 March 2024, at 9:00 AM"
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default NextEvents;
