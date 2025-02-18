import React, { useContext} from "react";
import { ApiContext } from "../contexts/ApiContext";
import LoadingAnimation from "../components/Shared/LoadingAnimation";
import DashboardTable from "../components/dashboardParts/DashboardTable";
import { sidebarContext } from "../contexts/DashboardStyles";

function Dashboard() {
  const {isOpen} = useContext(sidebarContext)
  const { data, loading } = useContext(ApiContext);
  console.log(data);

  if (loading) {
    return <LoadingAnimation />;
  }
  return (
    <div className="w-full h-screen    mx-auto  flex flex-row relative px-4 mb-20">
      <div className={`w-full p-4  h-screen max-w-screen-xl pt-28 mx-auto transition-all duration-300 ${isOpen ?"pl-72" : "pl-0" }`}>
        <DashboardTable data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
