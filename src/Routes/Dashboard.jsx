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
  const [displayData, setDisplayData] = useState([]); // Initially set to `data`
  const [noResults, setNoResults] = useState(false);


  useEffect(() => {
    setDisplayData(data || []); // Ensure it doesn't set `undefined`
  }, [data]);

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setDisplayData(data || []); // Reset to full data when input is empty
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

  // useEffect(() => {
  //   if (searchQuery.length > 0 && searchResult.length > 0) {
  //     setDisplayData(searchResult);
  //   } else {
  //     setDisplayData(data);
  //   }
  // }, [searchQuery, searchResult, data]);



  if (loading) {
    return <LoadingAnimation />;
  }
  return (
    <div className="w-full h-screen    mx-auto  flex flex-row relative px-4 mb-20">
     
      <div className={`w-full p-4  h-screen max-w-screen-xl pt-28 mx-auto transition-all duration-300 ${isOpen ?"pl-72" : "pl-0" }`}>
       <div className="w-full h-fit flex justify-end">
        <SearchBar onSearch={handleSearch}/>
        
       </div>
       {noResults?(
        <div className="w-full h-screen flex items-center justify-center">
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
