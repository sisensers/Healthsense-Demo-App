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

// Images
import kal from "assets/images/kal-visuals-square.jpg";
import marie from "assets/images/marie.jpg";
import ivana from "assets/images/ivana-square.jpg";
import drake from "assets/images/drake.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import bruce from "assets/images/bruce-mars.jpg";

// types
type Types = any;

const profileListData: Types = [
  {
    image: kal,
    name: "Sophie B.",
    description: "Hi! I need more information..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: marie,
    name: "Anne Marie",
    description: "Awesome work, can you..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: ivana,
    name: "Ivanna",
    description: "About files I can..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: team4,
    name: "Peterson",
    description: "Have a great afternoon..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: drake,
    name: "Nick Daniel",
    description: "Hi! I need more information..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: bruce,
    name: "Bruce Mars",
    description: "Hi! I need more information..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
];

export default profileListData;
