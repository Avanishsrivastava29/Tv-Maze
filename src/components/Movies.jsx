import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MOVIE_DETAILS } from "../utils/Constant";

const Movies = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    console.log(id);
    const response = await fetch(MOVIE_DETAILS + id);
    const json = await response.json();
    setData(json);
    console.log(json.summary);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <>
          <div
            style={{
              border: "4px dotted #4f7afa ",
              display: "flex",
              borderRadius: "8px",
              textAlign: "center",
              justifyContent: "center",
              marginBottom: "20px",

              margin: "10px",
            }}
          >
            <div
              style={{
                borderRight: "4px dotted #4f7afa",
                padding: "8px",
                display: "flex",

                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>{data.name}</h1>
              {data.image && data.image.original ? (
                <img
                  src={data.image.original}
                  alt={data.name}
                  style={{ height: "200px" }}
                />
              ) : (
                <div style={{ padding: "32px" }}>No Image Available</div>
              )}
              <button
                onClick={handleToggleForm}
                style={{
                  cursor: "pointer",
                  background: "#4f7afa",
                  color: "white",
                  borderRadius: "4px",
                  margin: "4px",
                  width: "100px",
                  padding: "6px",
                }}
              >
                Book Ticket
              </button>
              {showForm && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <form
                    style={{
                      border: "1px solid #ccc",
                      padding: "20px",
                      borderRadius: "8px",
                      width: "80%",
                    }}
                  >
                    <label style={{ marginBottom: "10px" }}>
                      Movie Name:
                      <input
                        type="text"
                        name="name"
                        value={data.name}
                        style={{
                          margin: "5px",
                          width: "100%",
                          padding: "8px",
                          boxSizing: "border-box",
                        }}
                      />
                    </label>
                    <label style={{ marginBottom: "10px" }}>
                      Email:
                      <input
                        type="email"
                        name="email"
                        style={{
                          margin: "5px",
                          width: "100%",
                          padding: "8px",
                          boxSizing: "border-box",
                        }}
                      />
                    </label>
                    <label style={{ marginBottom: "10px" }}>
                      Name:
                      <input
                        type="text"
                        name="movieName"
                        style={{
                          margin: "5px",
                          width: "100%",
                          padding: "8px",
                          boxSizing: "border-box",
                        }}
                      />
                    </label>
                    <label style={{ marginBottom: "10px" }}>
                      Date:
                      <input
                        type="date"
                        name="date"
                        style={{
                          margin: "5px",
                          width: "100%",
                          padding: "8px",
                          boxSizing: "border-box",
                        }}
                      />
                    </label>
                    <label style={{ marginBottom: "10px" }}>
                      Price:
                      <input
                        type="text"
                        name="price"
                        style={{
                          margin: "5px",
                          width: "100%",
                          padding: "8px",
                          boxSizing: "border-box",
                        }}
                      />
                    </label>
                    <button
                      type="submit"
                      style={{
                        margin: "10px",
                        cursor: "pointer",
                        background: "#4f7afa",
                        color: "white",
                        borderRadius: "4px",
                        padding: "8px",
                      }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div>
              <h3>Summary</h3>
              <p style={{ marginTop: "50px" }}>{data.summary}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Movies;
