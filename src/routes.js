import Dashboard from "views/Dashboard.js";
import UserProfile from "views/StudentProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import StudentHome from "views/StudentHome.js";
import AllJobs from "views/AllJobs";
import AppliedJobs from "views/AppliedJobs";
import Interviews from "views/Interviews";
import Offers from "views/Offers";
import LatestUpdates from "views/LatestUpdates";
import AddNewJob from "views/AddNewJob";
import AdminHome from "views/AdminHome";
import AdminJobs from "views/AdminJobs";
import CompanyHome from "views/CompanyHome";
import ApprovedJobs from "views/ApprovedJobs";
import PendingJobs from "views/PendingJobs";
import AllOffers from "views/AllOffers";
import PostUpdate from "views/PostUpdate";
import UpdateProfile from "views/UpdateProfile";

const dashboardRoutes = [
  // {
    
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/s"
  // },
  {
    upgrade: true,
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/s"
  },
  {
    path: "/Home",
    name: "Home",
    icon: "nc-icon nc-circle-09",
    component: StudentHome,
    layout: "/s"
  },
  {
    path: "/Alljobs",
    name: "All Jobs",
    icon: "nc-icon nc-circle-09",
    component: AllJobs,
    layout: "/s"
  },
  {
    path: "/AppliedJobs",
    name: "Applied Jobs",
    icon: "nc-icon nc-circle-09",
    component: AppliedJobs,
    layout: "/s"
  },
  {
    path: "/Interviews",
    name: "Interviews",
    icon: "nc-icon nc-circle-09",
    component: Interviews,
    layout: "/s"
  },
  {
    path: "/Offers",
    name: "Offers",
    icon: "nc-icon nc-circle-09",
    component: Offers,
    layout: "/s"
  },
  {
    path: "/LatestUpdates",
    name: "Latest Updates",
    icon: "nc-icon nc-circle-09",
    component: LatestUpdates,
    layout: "/s"
  },
  {
    path: "/Home",
    name: "Home",
    icon: "nc-icon nc-circle-09",
    component: AdminHome,
    layout: "/a"
  },
  {
    path: "/Addnewjob",
    name: "Add New Job",
    icon: "nc-icon nc-circle-09",
    component: AddNewJob,
    layout: "/a"
  },
  {
    path: "/jobs",
    name: "All Jobs",
    icon: "nc-icon nc-circle-09",
    component: AdminJobs,
    layout: "/a"
  },
  {
    path: "/home",
    name: "Home",
    icon: "nc-icon nc-circle-09",
    component: CompanyHome,
    layout: "/c"
  },
  {
    path: "/Approvedjobs",
    name: "Approved Jobs",
    icon: "nc-icon nc-circle-09",
    component: ApprovedJobs,
    layout: "/c"
  },
  {
    path: "/Pendingjobs",
    name: "Pending Jobs",
    icon: "nc-icon nc-circle-09",
    component: PendingJobs,
    layout: "/c"
  },
  {
    path: "/interviews",
    name: "All Interviews",
    icon: "nc-icon nc-circle-09",
    component: Interviews,
    layout: "/c"
  },
  {
    path: "/offers",
    name: "All Offers",
    icon: "nc-icon nc-circle-09",
    component: AllOffers ,
    layout: "/c"
  },
  {
    path: "/postupdates",
    name: "Post Updates",
    icon: "nc-icon nc-circle-09",
    component: PostUpdate ,
    layout: "/c"
  },
  {
    path: "/updateprofile",
    name: "Update Profile",
    icon: "nc-icon nc-circle-09",
    component: UpdateProfile ,
    layout: "/c"
  }
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "nc-icon nc-chart-pie-35",
  //   component: Dashboard,
  //   layout: "/s"
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/s"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/s"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/s"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/s"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/s"
  // }
];

export default dashboardRoutes;
