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
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Calendar from "examples/Calendar";

function PlatformSettings(): JSX.Element {
  const [followsMe, setFollowsMe] = useState<boolean>(true);
  const [answersPost, setAnswersPost] = useState<boolean>(false);
  const [mentionsMe, setMentionsMe] = useState<boolean>(true);
  const [newLaunches, setNewLaunches] = useState<boolean>(false);
  const [productUpdate, setProductUpdate] = useState<boolean>(true);
  const [newsletter, setNewsletter] = useState<boolean>(false);

  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <Calendar />
      </MDBox>
    </Card>
  );
}

export default PlatformSettings;
