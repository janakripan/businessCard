import React from 'react'

function DashboardTable({data}) {
  return (
    <div className="w-full h-full overflow-y-scroll overflow-x-auto">
    <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
      <thead>
        <tr className="bg-gray-200">
            
          <th className="p-3 border">ID</th>
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
        {data.map((item,index) => (
          <tr key={index} className="odd:bg-white even:bg-gray-100">
            <td className="p-3 border">{item.ID}</td>
            <td className="p-3 border">{item.FullName}</td>
            <td className="p-3 border">{item.Email}</td>
            <td className="p-3 border">{item.PhoneNumber}</td>
            <td className="p-3 border">{item.WhatsappNumber}</td>
            <td className="p-3 border">{item.BusinessName}</td>
            <td className="p-3 border">{item.Profession}</td>
            <td className="p-3 border">{item.LocationLink}</td>
            <td className="p-3 border">{item.Country}</td>
            <td className="p-3 border">{item.Broucher}</td>
            <td className="p-3 border">{item.Description}</td>
           

          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default DashboardTable
