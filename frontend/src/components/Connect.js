import React, { useState, useEffect } from "react";

function Connect() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div>
      {typeof backendData.name === "undefined" ? (
        <p>Wait, data is loading...</p>
      ) : (
        <div>
          <h1>Name: {backendData.name}</h1>
          <h2>Age: {backendData.age}</h2>
          <h2>Tummy: {backendData.tummy}</h2>Fav foods:
          {backendData.favourite_foods.map((food, i) => (
            <p key={i}>
              {i + 1}. {food}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Connect;
