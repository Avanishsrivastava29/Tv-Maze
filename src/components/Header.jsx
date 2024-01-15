import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({
  employeeData,
  setEmployeeData,
  showData,
  setShowData,
  searchQuery,
  setSearchQuery,
}) => {
  // const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    // const query = e.target.value;
    // console.log(query);
    setSearchQuery(query);

    const filterData = employeeData.filter((item) =>
      item.show.name.toLowerCase().includes(query)
    );

    // console.log(filterData);

    setShowData(filterData);
  };

  return (
    <>
      {/* Header Container */}
      <div className="header">
        {/* Logo */}
        <div className="logo" color="white">
          <Link to="/">
            {" "}
            <i class="fa-solid fa-bars" style={{ color: "white" }}></i>
          </Link>
          Tv Maze
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            placeholder="Search for Movies"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
        </div>

        {/* User */}
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </>
  );
};
export default Header;
