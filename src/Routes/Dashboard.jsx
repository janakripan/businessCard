import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";
import ContentCard from "../components/dashboardParts/ContentCard";
import LoadingAnimation from "../components/Shared/LoadingAnimation";
import DashboardTable from "../components/dashboardParts/DashboardTable";


function Dashboard() {
  const { data, loading } = useContext(ApiContext);
  console.log(data)

  if (loading) {
    return <LoadingAnimation />;
  }
  return (
    <div className="w-full h-screen   bg-gray-50 mx-auto  flex flex-row relative px-4 mb-20">
      <div className="w-full h-full min-h-screen max-w-screen-xl pt-20 mx-auto">
        {/* <ul className="w-full  h-full flex flex-col items-center gap-y-4 pt-6 ">
          {data.map((items, index) => (
            <ContentCard key={index} items={items} />
          ))}
        </ul> */}
        <DashboardTable data={data} />
      </div>
     
    </div>
  );
}

export default Dashboard;
