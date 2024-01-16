import React from "react";
import MDBox from "components/MDBox";
import MDProgress from "components/MDProgress";
import MDTypography from "components/MDTypography";
import HoverTooltip from "components/SisenseTooltip/HoverTooltip";

// ProductPage page components
import ProductCell from "layouts/pages-sisense/product-page/components/ProductCell";
import ReviewCell from "layouts/pages-sisense/product-page/components/ReviewCell";
import HappyHealthReview from "../components/ReviewCell/HappyHealthReview";
import BetterAssistanceReview from "../components/ReviewCell/BetterAssistanceReview";
import DefaultCell from "layouts/pages-sisense/product-page/components/DefaultCell";

// Images
import image1 from "assets/images/BetterHealth.png";
import image2 from "assets/images/BetterAssistance.png";
import image6 from "assets/images/HappyHealth.png";
import image7 from "assets/images/DeerMountain.png";
import image4 from "assets/images/FirstCare.png";
import image5 from "assets/images/CaveCreek.png";
import BetterHealthContent from "components/SisenseTooltip/BetterHealthContent";
import BetterAssistanceContent from "components/SisenseTooltip/BetterAssistanceContent";
import HappyHealthContent from "components/SisenseTooltip/HappyHealthContent";
import DeerMountainContent from "components/SisenseTooltip/DeerMountainContent";
import FirstCareContent from "components/SisenseTooltip/FirstCareContent";
import CaveCreekContent from "components/SisenseTooltip/CaveCreekContent";

const dataTableData = {
  columns: [
    { Header: "Practice", accessor: "Practice", width: "50%" },
    { Header: "Wait Time", accessor: "wait", width: "15%" },
    { Header: "Rating", accessor: "review", align: "center" },
    { Header: "availability", accessor: "availability", align: "center", width: "40%" },
    { Header: "id", accessor: "id", align: "center" },
  ],

  rows: [
    {
      Practice: (
        <>
          <>
            {/* Add the HoverTooltip component here */}
            <HoverTooltip tooltipContent={BetterHealthContent}>
              <span>
                <ProductCell image={image1} name="Better Health" />
              </span>
            </HoverTooltip>
          </>
        </>
      ),
      wait: <DefaultCell>103 Minutes</DefaultCell>,
      review: (
        <span>
          <ReviewCell rating={2.5} />
        </span>
      ),
      availability: (
        <MDBox width="8rem">
          <MDProgress variant="gradient" value={65} color="success" />
        </MDBox>
      ),
      id: (
        <>
          <DefaultCell>1005</DefaultCell>
        </>
      ),
    },
    {
      Practice: (
        <>
          <>
            {/* Add the HoverTooltip component here */}
            <HoverTooltip tooltipContent={BetterAssistanceContent}>
              <span>
                <ProductCell image={image2} name="Better Assistance" />
              </span>
            </HoverTooltip>
          </>
        </>
      ),
      wait: <DefaultCell>52 Minutes</DefaultCell>,
      review: <BetterAssistanceReview rating={5} />,
      availability: (
        <MDBox width="8rem">
          <MDProgress variant="gradient" value={90} color="success" />
        </MDBox>
      ),
      id: <DefaultCell>1010</DefaultCell>,
    },
    {
      Practice: (
        <>
          <>
            {/* Add the HoverTooltip component here */}
            <HoverTooltip tooltipContent={HappyHealthContent}>
              <span>
                <ProductCell image={image6} name="Happy Health" />
              </span>
            </HoverTooltip>
          </>
        </>
      ),
      wait: <DefaultCell>53 Minutes</DefaultCell>,
      review: <HappyHealthReview rating={3.5} />,
      availability: (
        <MDBox width="8rem">
          <MDProgress variant="gradient" value={60} color="warning" />
        </MDBox>
      ),
      id: <DefaultCell>1009</DefaultCell>,
    },
    {
      Practice: (
        <>
          <>
            {/* Add the HoverTooltip component here */}
            <HoverTooltip tooltipContent={DeerMountainContent}>
              <span>
                <ProductCell image={image7} name="Deer Mountain" />
              </span>
            </HoverTooltip>
          </>
        </>
      ),
      wait: <DefaultCell>105 Minutes</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <MDBox width="8rem">
          <MDProgress variant="gradient" value={40} color="warning" />
        </MDBox>
      ),
      id: <DefaultCell>1007</DefaultCell>,
    },
    {
      Practice: (
        <>
          <>
            {/* Add the HoverTooltip component here */}
            <HoverTooltip tooltipContent={FirstCareContent}>
              <span>
                <ProductCell image={image4} name="First Care" />
              </span>
            </HoverTooltip>
          </>
        </>
      ),
      wait: <DefaultCell>103 Minutes</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <MDBox width="8rem">
          <MDProgress variant="gradient" value={40} color="warning" />
        </MDBox>
      ),
      id: <DefaultCell>1006</DefaultCell>,
    },
    {
      Practice: (
        <>
          <>
            {/* Add the HoverTooltip component here */}
            <HoverTooltip tooltipContent={CaveCreekContent}>
              <span>
                <ProductCell image={image5} name="Cave Creek" />
              </span>
            </HoverTooltip>
          </>
        </>
      ),
      wait: <DefaultCell>105 Minutes</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <MDBox width="8rem">
          <MDProgress variant="gradient" value={40} color="warning" />
        </MDBox>
      ),
      id: <DefaultCell>1008</DefaultCell>,
    },
  ],
};

export default dataTableData;
