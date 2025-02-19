import React, { useEffect, useState } from "react";
import { Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function DashboardTable({ data }) {
  const itemsPerPage= 8
  console.log(data)

    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState([]);
  
    useEffect(() => {
      if (!data || data.length === 0) {
        setPaginatedData([]); // Prevent errors if data is undefined
        return;
      }
  
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setPaginatedData(data.slice(startIndex, endIndex));
    }, [data, currentPage]); // ✅ Also depend on `data`
  
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
    };
  
  return (
    <div className="w-full h-full  overflow-auto border-blue-400 border-[2px] custom-scrollbar rounded-xl relative ">
     <TableContainer component={Paper} className="custom-scrollbar" >
     <Table className="w-full border-collapse shadow-md rounded-lg ">
        <TableHead >
          <TableRow className="bg-blue-400 rounded-t-lg">
            <TableCell className="p-3 border rounded-tl-lg">ID</TableCell>
            <TableCell className="p-3 border">Name</TableCell>
            <TableCell className="p-3 border">Email</TableCell>
            <TableCell className="p-3 border">PhoneNumber</TableCell>
            <TableCell className="p-3 border">WhatsappNumber</TableCell>
            <TableCell className="p-3 border">Business </TableCell>
            <TableCell className="p-3 border">Profession</TableCell>
            <TableCell className="p-3 border">Location</TableCell>
            <TableCell className="p-3 border">country</TableCell>
            <TableCell className="p-3 border">Broucher</TableCell>
            <TableCell className="p-3 border">About</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {paginatedData.map((item, index) => (
            <TableRow
            key={index}
            className="bg-white border border-b-2">
              <TableCell className="p-3 whitespace-nowrap border border-x-0 ">{item.ID}</TableCell>
              <TableCell className="p-3 whitespace-nowrap border border-x-0 ">{item.FullName}</TableCell>
              <TableCell className="p-3 whitespace-nowrap border border-x-0 ">{item.Email}</TableCell>
              <TableCell className="p-3 whitespace-nowrap border border-x-0 ">{item.PhoneNumber}</TableCell>
              <TableCell className="p-3 whitespace-nowrap border border-x-0 ">{item.WhatsappNumber}</TableCell>
              <TableCell className="p-3 whitespace-nowrap border border-x-0 ">{item.BusinessName}</TableCell>
              <TableCell className="p-3 whitespace-nowrap border border-x-0 ">{item.Profession}</TableCell>
              <TableCell className="p-3 whitespace-nowrap border border-x-0 ">{item.LocationLink}</TableCell>
              <TableCell className="p-3 whitespace-nowrap border border-x-0 ">{item.Country}</TableCell>
              <TableCell className="p-3 whitespace-nowrap border border-x-0 ">{item.Broucher}</TableCell>
              <TableCell className="p-3 whitespace-nowrap border border-x-0 ">{item.Description}</TableCell>
            </TableRow>
          ))}
         
        </TableBody>
      </Table>
     </TableContainer>
      <Stack spacing={2} sx={{ marginTop: "20px", alignItems: "center" }} className="absolute bottom-0 ">
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </div>
  );
}

export default DashboardTable;
