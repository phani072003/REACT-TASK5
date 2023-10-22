import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthDateArray = birthDate.split("-");
    const birthYear = parseInt(birthDateArray[0]);
    const birthMonth = parseInt(birthDateArray[1]);
    const birthDay = parseInt(birthDateArray[2]);

    const age = today.getFullYear() - birthYear - 1;
    if (
      today.getMonth() + 1 > birthMonth ||
      (today.getMonth() + 1 === birthMonth && today.getDate() >= birthDay)
    ) {
      setAge(age + 1);
    } else {
      setAge(age);
    }
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Age Calculator</h1>
      <p>Enter your date of birth</p>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button
          className="btn btn-primary"
          onClick={calculateAge}
        >
          Calculate Age
        </button>
      </div>
      {age !== 0 && (
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          You are {age} years old
        </h2>
      )}
    </div>
  );
}

export default App;
