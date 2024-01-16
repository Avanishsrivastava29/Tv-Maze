import React from "react";
import { Link } from "react-router-dom";

const MoviesCard = ({ data, setShowData, showData }) => {
  const handleDelete = (data) => {
    setShowData((prevData) =>
      prevData.filter((item) => item.show.name !== data.show.name)
    );
  };

  return (
    <>
      <div className="employee-card">
        {/* User-Image */}
        {data.show.image && data.show.image.medium ? (
          <img
            src={data.show.image.medium}
            alt="user"
            className="user-icon"
            style={{ marginBottom: "1.2rem", borderRadius: "4px" }}
          />
        ) : (
          <div style={{ padding: "32px" }}>No Image Available</div>
        )}

        {/* Name */}
        <div style={{ fontWeight: "bold" }}>{data.show.name}</div>

        <div
          style={{
            marginBottom: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "small",
          }}
        >
          {data.show.genres.join(",")}
        </div>

        {/* Buttons */}
        <div className="card-button">
          <Link to={"/Summary/" + data.show.id}>
            {" "}
            <button className="editBtn">Summary</button>
          </Link>
          <button className="deleteBtn" onClick={() => handleDelete(data)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
export default MoviesCard;
