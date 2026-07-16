import React from "react";
import "./App.css";

function App() {

  const office = {
    name: "DBS Business Center",
    rent: 55000,
    address: "Chennai"
  };

  const officeList = [
    {
      id: 1,
      name: "DBS Business Center",
      rent: 55000,
      address: "Chennai"
    },
    {
      id: 2,
      name: "Tech Park Office",
      rent: 75000,
      address: "Bangalore"
    },
    {
      id: 3,
      name: "Smart Workspace",
      rent: 45000,
      address: "Hyderabad"
    }
  ];

  return (
    <div className="container">

      <h1>Office Space Rental App</h1>

      <img
        src="/office.jpg"
        alt="Office Space"
        width="500"
        height="300"
      />

      <h2>Featured Office</h2>

      <p><b>Name:</b> {office.name}</p>

      <p>
        <b>Rent:</b>{" "}
        <span
          style={{
            color: office.rent < 60000 ? "red" : "green",
            fontWeight: "bold"
          }}
        >
          Rs. {office.rent}
        </span>
      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item) => (
        <div key={item.id} className="card">

          <h3>{item.name}</h3>

          <p>
            <b>Rent:</b>{" "}
            <span
              style={{
                color: item.rent < 60000 ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              Rs. {item.rent}
            </span>
          </p>

          <p>
            <b>Address:</b> {item.address}
          </p>

        </div>
      ))}

    </div>
  );
}

export default App;