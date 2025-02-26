import { CiHome } from "react-icons/ci";
import { TiThListOutline } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

export const dashboardLinks = [
  {
    id: 1,
    title: "Home",
    icon: CiHome,
    path: "/",
  },
  {
    id: 2,
    title: "All Data",
    icon: TiThListOutline,
    path: "alldata",
  },
  {
    id: 3,
    title: "person",
    icon: IoPersonOutline,
    path: "singledata",
  },
 
];
