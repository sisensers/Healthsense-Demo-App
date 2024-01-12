import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { usMerc } from "@react-jvectormap/unitedstates";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import SalesTable from "examples/Tables/SalesTable";
import { ExecuteQuery } from "@sisense/sdk-ui";
import * as DM from "sisense/Schemas/healthsense-master";
import { Data, measures, filters, Filter } from "@sisense/sdk-data";
import US from "assets/images/icons/flags/US.png";

type Props = {
  filters: Filter;
};

function SalesByCountry(props: Props): JSX.Element {
  const handleCountryClick = (countryName: string) => {
    const encodedCountryName = encodeURIComponent(countryName);
    // Simulate navigation by updating the window location
    window.location.href = `/sisense/table/basic/${encodedCountryName}`;
  };

  return (
    <Card sx={{ width: "100%" }}>
      <MDBox display="flex" alignItems="center" p={2}>
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          variant="gradient"
          bgColor="success"
          color="white"
          shadow="md"
          borderRadius="xl"
          ml={3}
          mt={-2}
        >
          <Icon fontSize="medium" color="inherit">
            language
          </Icon>
        </MDBox>
        <MDTypography variant="h6" sx={{ ml: 2 }}>
          Insurance Reimbursments & Patient Payments By State
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} lg={6}>
            <ExecuteQuery
              dataSource={DM.DataSource}
              dimensions={[DM.Healthsense.State]}
              measures={[
                measures.countDistinct(DM.Healthsense.VisitID, "Total Quantity"),
                measures.sum(DM.Healthsense.InsuranceReimbursedAmount, "Total Revenue"),
                measures.sum(DM.Healthsense.PatientPaymentAmount, "Total Cost"),
              ]}
              filters={[props.filters]}
            >
              {(data: Data) => {
                console.log(data);
                const sisenseTableData = TranslateSisenseDataToTable(data);
                return <SalesTable rows={sisenseTableData} shadow={false} />;
              }}
            </ExecuteQuery>
          </Grid>
          <Grid item xs={12} md={5} lg={6}>
            <VectorMap
              map={usMerc}
              zoomOnScroll={false}
              zoomButtons={false}
              markersSelectable
              backgroundColor="transparent"
              containerStyle={{ height: "500px" }}
              containerClassName="map"
              selectedMarkers={["1", "3"]}
              focusOn="" // Set the focusOn property to "US"
              markers={[
                { name: "California", latLng: [36.7783, -119.4179] },
                { name: "Arizona", latLng: [34.0489, -111.0937] },
                { name: "Colorado", latLng: [39.5501, -105.7821] },
                { name: "Texas", latLng: [31.9686, -99.9018] },
              ]}
              regionStyle={{
                initial: {
                  fill: "#dee2e7",
                  "fill-opacity": 1,
                  stroke: "none",
                  "stroke-width": 0,
                  "stroke-opacity": 0,
                },
              }}
              markerStyle={{
                initial: {
                  fill: "#e91e63",
                  stroke: "#ffffff",
                  "stroke-width": 5,
                  "stroke-opacity": 0.5,
                  r: 7,
                },
                hover: {
                  fill: "E91E63",
                  stroke: "#ffffff",
                  "stroke-width": 5,
                  "stroke-opacity": 0.5,
                },
                selected: {
                  fill: "E91E63",
                  stroke: "#ffffff",
                  "stroke-width": 5,
                  "stroke-opacity": 0.5,
                },
              }}
              style={{ marginTop: "-1.5rem" }}
              onRegionTipShow={() => false}
              onMarkerTipShow={() => false}
            />
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

interface TableRow {
  State: [string, string];
  Claims: number;
  Reimbursed: string;
  Payment: string;
}

function TranslateSisenseDataToTable(
  data: Data
): { [key: string]: string | number | (string | number)[] }[] {
  const salesTable: { [key: string]: string | number | (string | number)[] }[] = [];
  data.rows.forEach((row: any) => {
    const countryMappings: Record<string, [string, string]> = {
      California: [US, "California"],
      Colorado: [US, "Colorado"],
      Texas: [US, "Texas"],
      Arizona: [US, "Arizona"],
    };

    const countryName = row[0].text;
    const countryWithFlag = countryMappings[countryName];

    if (countryWithFlag) {
      const tableRow: { [key: string]: string | number | (string | number)[] } = {
        State: countryWithFlag,
        Claims: Math.floor(row[1].data),
        Reimbursed: `$${row[2].data.toLocaleString("en-US", { maximumFractionDigits: 2 })}`,
        Payments: `$${row[3].data.toLocaleString("en-US", { maximumFractionDigits: 2 })}`,
      };
      salesTable.push(tableRow);
    } else {
      console.error(
        `Error: Data not retrieved or flag values weren't changed for country: ${countryName}`
      );
    }
  });

  console.log(salesTable);
  return salesTable;
}

export default SalesByCountry;
