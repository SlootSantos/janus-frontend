import Dashboard from "views/Dashboard.js";
import Typography from "views/Typography.js";
// import Icons from "views/Icons.js";
// import Notifications from "views/Notifications.js";
// import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/metrics",
    name: "Metrics",
    icon: "tim-icons icon-sound-wave",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "tim-icons icon-settings-gear-63",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/stacks",
    name: "JAM-Stacks",
    icon: "tim-icons icon-cloud-download-93",
    component: Dashboard,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin",
  // },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin",
  },
];
export default routes;
