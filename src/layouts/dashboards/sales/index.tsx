import React, { useState } from "react";
import CodeHighlight from "components/CodeHighlight";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SisenseDashboard from "./sisenseDashboard";

export default function Dashboard() {
  const [view, setView] = useState("Preview");
  const [sisenseExport, setSisenseExport] = useState<any>(null);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SisenseDashboard
        sisenseUrl={"https://csdklivedemo.sisensepoc.com"}
        watToken={
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSU0EtT0FFUC0yNTYiLCJ6aXAiOiJERUYiLCJlbmMiOiJBMTI4R0NNIiwia2lkIjoiNjU5NmRmOTQxOTYyMmQwMDMzZTdkOGE0In0.Cd3qcHfJDWWlvhcrDZYOn9IYA8ruVO3-n4OQ1Gp2y2MPeHZcxm4vkybMyENI4Aj2eL43TZ_RpJV1KN4wFmGtzTSajfoVTdsRoo8a_baGaJQtLaKixQBPX5mLUvubQiFsStUeTN7vrD0fHdazBuKJEImeI_iOzOeezVRq1dOndHnC3yv2Lx1d8KIH-gnXdTI_VnEBdiI7WoqXpa-HDMzECQ334iEW9OQqclR6VXAE6JbAxbWJzaDz23fR-ifhl_Xw4PeAHDMhFre9SKnVf-YfPLt1UQ9N-_Yn90VLzusLl2OEHvlhYWdQVjzmY1W5yPQtkMJ5um4ZCymEoKI-OhkUWA.vzrXISScLDl97eE6.uwQ2wzs3LZL4bAWjv9wRRd6vYykwE17KE8v0rx2VKi9di9Whc5EYfQI1tLsoZfMcqfWqnO3ryc-sdjqx6MWajW1yMFaUE1YjmZ1MbGP_LC49TVF2vwzlLJOf40yO50HTxcnmi-zHGv-XW5WKaTL0kv-oauDDtubexfXyEfmQSFUICRA_BRGQpxxiWnsXYfMiu5KXp_inVf3deOi1NtduifpMj7GRk5OWxz0y9PxIRp1sJlQC.2r7BNAiOYORrIxxvp8ztXg"
        }
        dashboardId={"659494b119622d0033e7d75a"}
      />
    </DashboardLayout>
  );
}
