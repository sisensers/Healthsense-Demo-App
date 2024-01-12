// TooltipContent.tsx
import React from "react";
import MDBox from "components/MDBox";

import ProductCell from "layouts/ecommerce/products/product-page/components/ProductCell";
import image6 from "assets/images/HappyHealth.png";

// Sisense
import ExecuteQueryChart from "sisense/Charts/ExecuteQueryChart";
import MDButton from "components/MDButton";
import AvailabilityChart from "sisense/Charts/AvailabilityChart";
import HoverTooltip from "./HoverTooltip";
import { filters } from "@sisense/sdk-data";
import * as DM from "sisense/Schemas/healthsense-master";

function HappyHealthContent() {
  const tooltipContent = () => <div></div>;

  return (
    <div>
      <MDBox>
        <MDBox mb={5}>
          <ProductCell image={image6} name="Happy Health" />
        </MDBox>
        <MDBox mb={1}>
          <AvailabilityChart
            practiceFilter={["Happy Health Care Clinic"]}
            visitDateFilter={["01 2024"]}
          />
        </MDBox>
      </MDBox>
      <HoverTooltip tooltipContent={HappyHealthContent}>
        <span></span>
      </HoverTooltip>
    </div>
  );
}

export default HappyHealthContent;
