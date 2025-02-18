import React from "react";

function DashboardTable({ data }) {
  return (
    <div className="w-full h-full  overflow-auto border-blue-400 border-[2px] custom-scrollbar rounded-xl ">
      <table className="w-full border-collapse shadow-md rounded-lg ">
        <thead >
          <tr className="bg-blue-400 rounded-t-lg">
            <th className="p-3 border rounded-tl-lg">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">PhoneNumber</th>
            <th className="p-3 border">WhatsappNumber</th>
            <th className="p-3 border">Business </th>
            <th className="p-3 border">Profession</th>
            <th className="p-3 border">Location</th>
            <th className="p-3 border">country</th>
            <th className="p-3 border">Broucher</th>
            <th className="p-3 border">About</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border border-b-2">
              <td className="p-3 whitespace-nowrap border border-x-0 ">{item.ID}</td>
              <td className="p-3 whitespace-nowrap border border-x-0 ">{item.FullName}</td>
              <td className="p-3 whitespace-nowrap border border-x-0 ">{item.Email}</td>
              <td className="p-3 whitespace-nowrap border border-x-0 ">{item.PhoneNumber}</td>
              <td className="p-3 whitespace-nowrap border border-x-0 ">{item.WhatsappNumber}</td>
              <td className="p-3 whitespace-nowrap border border-x-0 ">{item.BusinessName}</td>
              <td className="p-3 whitespace-nowrap border border-x-0 ">{item.Profession}</td>
              <td className="p-3 whitespace-nowrap border border-x-0 ">{item.LocationLink}</td>
              <td className="p-3 whitespace-nowrap border border-x-0 ">{item.Country}</td>
              <td className="p-3 whitespace-nowrap border border-x-0 ">{item.Broucher}</td>
              <td className="p-3 whitespace-nowrap border border-x-0 ">{item.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardTable;
