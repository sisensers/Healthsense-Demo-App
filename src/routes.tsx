import Analytics from "layouts/dashboards/analytics";
import Sales from "layouts/dashboards/sales";
import SelfService from "layouts/dashboards/selfservice";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import AllProjects from "layouts/pages/profile/all-projects";
import NewUser from "layouts/pages/users/new-user";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Timeline from "layouts/pages/projects/timeline";
import PricingPage from "layouts/pages/pricing-page";
import Widgets from "layouts/pages/widgets";
import RTL from "layouts/pages/rtl";
import Charts from "layouts/pages/charts";
import Notifications from "layouts/pages/notifications";
import Kanban from "layouts/applications/kanban";
import Wizard from "layouts/applications/wizard";
import DataTables from "layouts/applications/data-tables";
import Calendar from "layouts/applications/calendar";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import ProductPage from "layouts/ecommerce/products/product-page";
import OrderList from "layouts/ecommerce/orders/order-list";
import OrderDetails from "layouts/ecommerce/orders/order-details";
import SignInBasic from "layouts/authentication/sign-in/basic";
import SignInCover from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpCover from "layouts/authentication/sign-up/cover";
import ResetCover from "layouts/authentication/reset-password/cover";

//Sisense
import SisenseCharts from "layouts/pages-sisense/charts";
import NivoCharts from "layouts/pages-sisense/nivo-charts";
import SisenseProductPage from "layouts/pages-sisense/product-page";
import SisenseMicroAnalyticsPage from "layouts/pages-sisense/micro-analytics";
import Practice from "layouts/dashboards/practice";
import DeveloperExample from "layouts/dashboards/developer";
import SisenseOrderList from "layouts/pages-sisense/order-list";

// Material Dashboard 2 PRO React TS components
import MDAvatar from "components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";

// Images
import profilePicture from "assets/images/team-3.jpg";

const routes = [
  {
    type: "collapse",
    name: "Brooklyn Alice",
    key: "brooklyn-alice",
    icon: <MDAvatar src={profilePicture} alt="Brooklyn Alice" size="sm" />,
    collapse: [
      {
        name: "My Profile",
        key: "my-profile",
        route: "/pages/profile/profile-overview",
        component: <ProfileOverview />,
      },
      {
        name: "Settings",
        key: "profile-settings",
        route: "/pages/account/settings",
        component: <Settings />,
      },
      {
        name: "Logout",
        key: "logout",
        route: "/authentication/sign-in/basic",
        component: <SignInBasic />,
      },
    ],
  },
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    collapse: [
      {
        name: "Claims Analysis",
        key: "claims-analysis",
        route: "/dashboards/claims-analysis",
        component: <Analytics />,
      },
      {
        name: "Patient Care",
        key: "patient-care",
        route: "/dashboards/patient-care",
        component: <Sales />,
      },
      {
        name: "Self Service",
        key: "self-service",
        route: "/dashboards/self-service",
        component: <SelfService />,
      },
    ],
  },
  { type: "title", title: "Adinistration", key: "title-administration" },
  {
    type: "collapse",
    name: "Administration",
    key: "adminstration",
    icon: <Icon fontSize="medium">image</Icon>,
    collapse: [
      {
        name: "Patient Scheduling",
        key: "patient-scheduling",
        route: "/adminstration/patient-scheduling",
        component: <Practice />,
      },
      {
        name: "Claims Processing",
        key: "claims-processing",
        route: "/adminstration/claims-processing",
        component: <SisenseOrderList />,
      },
      {
        name: "Calendar",
        key: "calendar",
        route: "/adminsitration/calendar",
        component: <Calendar />,
      },
    ],
  },
  { type: "title", title: "Developer Suite", key: "title-developer-suite" },
  {
    type: "collapse",
    name: "Developer Examples",
    key: "developer-examples",
    icon: <Icon fontSize="medium">apps</Icon>,
    collapse: [
      {
        name: "SDK-UI",
        key: "sdk-ui",
        route: "/developer-examples/sdk-ui",
        component: <DeveloperExample />,
      },
      {
        name: "Nivo Charts",
        key: "nico-charts",
        route: "/developer-examples/nivo-charts",
        component: <NivoCharts />,
      },
      {
        name: "ChartsJS",
        key: "chartjs",
        route: "/developer-examples/chartjs",
        component: <SisenseCharts />,
      },
      {
        name: "Sisense Fusion Platform",
        key: "sisense-fusion-platform",
        href: "https://csdklivedemo.sisensepoc.com",
      },
    ],
  },
  { type: "divider", key: "divider-1" },
  { type: "title", title: "Docs", key: "title-docs" },
  {
    type: "collapse",
    name: "Documentation",
    key: "documentation",
    icon: <Icon fontSize="medium">upcoming</Icon>,
    collapse: [
      {
        name: "Getting Started",
        key: "getting-started",
        collapse: [
          {
            name: "Compose SDK",
            key: "compose-sdk",
            href: "https://sisense.dev/guides/sdk/",
          },
          {
            name: "Embed SDK",
            key: "embed-sdk",
            href: "https://sisense.dev/guides/embeddingDashboards/embed-sdk.html",
          },
          {
            name: "Embed Playground",
            key: "embed-playground",
            href: "https://sisense.dev/playground",
          },
        ],
      },
    ],
  },
];

export default routes;
