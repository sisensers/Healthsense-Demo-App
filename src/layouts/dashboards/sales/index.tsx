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
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSU0EtT0FFUC0yNTYiLCJ6aXAiOiJERUYiLCJlbmMiOiJBMTI4R0NNIiwia2lkIjoiNjU5NmRmOTQxOTYyMmQwMDMzZTdkOGE0In0.hERz566tJkTViW4Oh_F8I4X7ZnxZcF3OV45B4MdSR45HXyYNrPV6OYaUcnUZb5NPdHO5zysxxC79kpAC02BIjAP986tliV3qCIQWOJQBg7UciYWuTg8ZWH1j-QWvS0YJoXLJyZ8H3I-BAH8tulyAOuL__6GnuMHsf8wU9SCk7YX4g_3usJW4QrnB8hctmu-sjTNSlY5sGjjT5S7bCzG8K-ErNUmuZqYmvjTaF-lfFvDU8TBtsAUaiCOsluH2dRQCAI5aR0nbj0H8X8mlEEnEd5it46NnutfUCzwCFR2WqTA7EoC5PJXj1od1b45HyaUDq8nIfmRSIPGgaKROo_b7_Q.xS8pfwtw8wN-W3hO.ENVHbd-gYR8ghW5e68PxTT6E7pV-_oXTGrHnp7W4WNaZSXUcCHKFNUBZx1DooW-TGlXxsCwdQdyx6bhxweqgA5Rk3H6x1SzQBr2c7L61y1edm6vArdoyLbLwYeoGHiHR1Y7EtoFpPQcaGWC-1AAKEWLydrUC-I4sqlklzaJt8ciw522ZgZGCAoGh_KakbFM5f3S1MOJYGXGi54SJsbuKPdbR._vJmWnQ9_5Siir04eUtvMA"
        }
        dashboardId={"659494b119622d0033e7d75a"}
      />
    </DashboardLayout>
  );
}
