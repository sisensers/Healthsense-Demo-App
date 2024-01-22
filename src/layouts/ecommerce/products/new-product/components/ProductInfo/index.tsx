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

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDEditor from "components/MDEditor";
import MDInput from "components/MDInput";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function ProductInfo(): JSX.Element {
  return (
    <MDBox>
      <MDTypography variant="h5">Claim Information</MDTypography>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Amount" />
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <MDBox mb={3}>
              <MDBox mb={2} display="inline-block">
                <MDTypography
                  component="label"
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  textTransform="capitalize"
                >
                  Insurance Provider
                </MDTypography>
              </MDBox>
              <Autocomplete
                defaultValue="Other"
                options={[
                  "SenecaCare Assurance Group",
                  "SereneHealth",
                  "Aurelian Health Shield",
                  "StoicCare Assurance",
                  "Other",
                ]}
                renderInput={(params) => <MDInput {...params} variant="standard" />}
              />
            </MDBox>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField type="text" label="Member ID" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default ProductInfo;
