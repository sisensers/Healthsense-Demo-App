// TooltipContent.tsx
import React from "react";
import MDBox from "components/MDBox";

import ProductCell from "layouts/ecommerce/products/product-page/components/ProductCell";
import image1 from "assets/images/BetterHealth.png";

// Sisense
import ExecuteQueryChart from "sisense/Charts/ExecuteQueryChart";
import MDButton from "components/MDButton";
import AvailabilityChart from "sisense/Charts/AvailabilityChart";
import HoverTooltip from "./HoverTooltip";
import { filters } from "@sisense/sdk-data";
import * as DM from "sisense/Schemas/healthsense-master";

function BetterHealthContent() {
  const tooltipContent = () => <div></div>;

  return (
    <div>
      <MDBox>
        <MDBox mb={5}>
          <ProductCell image={image1} name="Better Health" />
        </MDBox>
        <MDBox mb={1}>
          <AvailabilityChart practiceFilter={["Better Health"]} visitDateFilter={["01 2024"]} />
        </MDBox>
      </MDBox>
      <HoverTooltip tooltipContent={tooltipContent}>
        <span></span>
      </HoverTooltip>
    </div>
  );
}

export default BetterHealthContent;
