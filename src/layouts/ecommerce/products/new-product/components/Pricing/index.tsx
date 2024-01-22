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
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function Pricing(): JSX.Element {
  return (
    <MDBox>
      <MDTypography variant="h5">Claim Submit</MDTypography>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Date" placeholder="01/01/2024" />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
            <Autocomplete
              defaultValue="Office"
              options={[
                "Better Health",
                "Better Assistance",
                "Cave Creek",
                "Deer Mountain",
                "Happy Health",
                "First Care",
                "Office",
              ]}
              renderInput={(params) => <MDInput {...params} variant="standard" />}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormField type="text" label="Office ID" placeholder="71283476591" />
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MDBox my={2} display="inline-block">
              <MDTypography component="label" variant="button" fontWeight="regular" color="text">
                Status
              </MDTypography>
            </MDBox>
            <Autocomplete
              multiple
              defaultValue={["In Network"]}
              options={["In Network", "Out of Network"]}
              renderInput={(params) => <MDInput {...params} variant="standard" />}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default Pricing;
