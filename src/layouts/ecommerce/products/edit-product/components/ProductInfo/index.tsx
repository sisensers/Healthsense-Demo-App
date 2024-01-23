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
import Card from "@mui/material/Card";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDEditor from "components/MDEditor";
import MDInput from "components/MDInput";

// NewProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function ProductInfo(): JSX.Element {
  return (
    <Card>
      <MDBox p={3}>
        <MDTypography variant="h5">Order Information</MDTypography>
        <MDBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField type="text" label="Medication Name" defaultValue="Doxycycline" />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <FormField type="text" label="Cost" defaultValue="$90" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormField type="number" label="Quantity" defaultValue={50} />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <MDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <MDTypography component="label" variant="button" fontWeight="regular" color="text">
                  Description&nbsp;&nbsp;
                  <MDTypography variant="caption" fontWeight="regular" color="text">
                    (optional)
                  </MDTypography>
                </MDTypography>
              </MDBox>
              <MDEditor />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MDBox mb={3}>
                <MDBox mb={1.625} display="inline-block">
                  <MDTypography
                    component="label"
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    textTransform="capitalize"
                  >
                    Treatment Type
                  </MDTypography>
                </MDBox>
                <Autocomplete
                  defaultValue="Antibiotic"
                  options={["Antibiotic", "Pain", "Vaccine", "Blood Pressure"]}
                  renderInput={(params) => <MDInput {...params} variant="standard" />}
                />
              </MDBox>
              <MDBox mb={1.625} display="inline-block">
                <MDTypography
                  component="label"
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  textTransform="capitalize"
                >
                  Prescribing Doctor
                </MDTypography>
              </MDBox>
              <Autocomplete
                defaultValue="Amelia Monroe"
                options={["Amelia Monroe", "Liam Harrison", "Olivia Parker", "Jackson Blake"]}
                renderInput={(params) => <MDInput {...params} variant="standard" />}
              />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ProductInfo;
