import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination"; // Import your Pagination component here

export default function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        setData(response.data);
      } catch (err) {
        
        alert("Failed to fetch data",err);
      }
    };

    fetchData();
  }, []);

  // Calculate pagination data
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Employee Data Table</h2>
      <table style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#43967B", color: "#fff" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Email</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((employee) => (
            <tr key={employee.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{employee.id}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{employee.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{employee.email}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Component */}
      <Pagination
        updatePage={setCurrentPage}
        currentPages={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
