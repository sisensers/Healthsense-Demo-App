import { useState } from "react";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";

import ExecuteQueryChart from "sisense/Charts/ExecuteQueryChart";
import DayOfWeek from "sisense/Charts/DayOfWeek";
import { ButtonGroup } from "components/ButtonGroup";
import DailySales from "sisense/Charts/DailySales";

import blackChair from "assets/images/ecommerce/AdidasUltraboostRunningShoes.png";
import CampaignPerformance from "sisense/Charts/CampaignPerformance";
import Sentiment from "sisense/Charts/Sentiment";
import Summary from "sisense/Charts/Summary";
import Discuss from "sisense/Charts/Discuss";
import OrderForm from "./OrderForm";

export default function OrderInsights() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const id = open ? "simple-popover" : undefined;

  const [view, setView] = useState("Campaign");
  return (
    <div>
      <MDButton
        variant="gradient"
        color="info"
        fullWidth
        aria-describedby={id}
        onClick={handleOpen}
      >
        Process Claims
      </MDButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <MDBox>
          <OrderForm />
        </MDBox>
      </Modal>
    </div>
  );
}
