import React, { useContext, useEffect, useState} from "react";
import { ApiContext } from "../contexts/ApiContext";
import LoadingAnimation from "../components/Shared/LoadingAnimation";
import DashboardTable from "../components/dashboardParts/DashboardTable";
import { sidebarContext } from "../contexts/DashboardStyles";
import SearchBar from "../shared/SearchBar";

function Dashboard() {
  const {isOpen} = useContext(sidebarContext)
  const { data, loading } = useContext(ApiContext);
 
  
  const [searchQuery, setSearchQuery] = useState("");
  const [displayData, setDisplayData] = useState([]); 
  const [noResults, setNoResults] = useState(false);


  useEffect(() => {
    setDisplayData(data || []); 
  }, [data]);

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setDisplayData(data || []);
      setNoResults(false);
      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(lowerCaseQuery)
      )
    );

    setDisplayData(filteredResults);
    console.log(displayData)
    setNoResults(filteredResults.length === 0);
  
  };

  



  if (loading) {
    return <LoadingAnimation />;
  }
  return (
    <div className="w-full h-screen    mx-auto  flex flex-row relative px-4 ">
     
      <div className={`w-full p-4  h-screen max-w-screen-xl pt-28 mx-auto transition-all duration-300 ${isOpen ?"md:pl-[340px] lg:pl-72 "  : "pl-0" }`}>
       <div className="w-full h-fit flex justify-end">
        <SearchBar onSearch={handleSearch} setNoResult={setNoResults}/>
        
       </div>
       {noResults?(
        <div className="w-full h-[75vh] flex items-center justify-center">
          <p>
            no matching items
          </p>

        </div>
       )
       :(<DashboardTable data={displayData}  />)
      }
        
      </div>
    </div>
  );
}

export default Dashboard;
