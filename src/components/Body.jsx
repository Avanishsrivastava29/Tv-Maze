import { useEffect } from "react";
import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const EMPLOYEE_API = "https://api.tvmaze.com/search/shows?q=all";

const Body = () => {
  // const [employeeData, setEmployeeData] = useState([]);
  const [
    employeeData,
    setEmployeeData,
    showData,
    setShowData,
    searchQuery,
    setSearchQuery,
  ] = useOutletContext();

  const employeeDetails = async () => {
    const data = await fetch(EMPLOYEE_API);
    const json = await data.json();
    //console.log(json);
    setEmployeeData(json);
    setShowData(json);
  };

  useEffect(() => {
    employeeDetails();
  }, []);

  return (
    <>
      <div className="card-container">
        {showData.map((employeeData) => (
          <li key={employeeData.show.id}>
            {" "}
            <EmployeeCard
              data={employeeData}
              {...{ setShowData, showData }}
            />{" "}
          </li>
        ))}
      </div>
    </>
  );
};

export default Body;
