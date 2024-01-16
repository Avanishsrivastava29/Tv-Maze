import { useEffect } from "react";
import { useState } from "react";

import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { MOVIES_API } from "../utils/Constant";
import MoviesCard from "./MoviesCard";

const Body = () => {
  // const [employeeData, setEmployeeData] = useState([]);
  const [
    movieData,
    setMovieData,
    showData,
    setShowData,
    searchQuery,
    setSearchQuery,
  ] = useOutletContext();

  const employeeDetails = async () => {
    const data = await fetch(MOVIES_API);
    const json = await data.json();
    //console.log(json);
    setMovieData(json);
    setShowData(json);
  };

  useEffect(() => {
    employeeDetails();
  }, []);

  return (
    <>
      <div className="card-container">
        {showData.map((movieData) => (
          <li key={movieData.show.id}>
            {" "}
            <MoviesCard data={movieData} {...{ setShowData, showData }} />{" "}
          </li>
        ))}
      </div>
    </>
  );
};

export default Body;
