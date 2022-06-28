import "./App.css";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    userName: "",
    age: 0,
  });

  const [display, setDisplay] = useState([]);

  const { userName, age } = user;

  const newEntry = { id: new Date().getTime().toString() };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (e) => {
    setDisplay((prev) => [...prev, user]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-label">
          <h4>
            <label>Username</label>
          </h4>
        </div>
        <div className="form-control">
          <input
            type="text"
            name="userName"
            defaultValue={userName}
            onChange={handleChange}
          />
        </div>
        <div className="form-label">
          <h4>
            <label>Age</label>
          </h4>
        </div>
        <div className="form-control">
          <input
            type="number"
            name="age"
            defaultValue={age}
            onChange={handleChange}
          />
        </div>
        <br />
        <button onClick={handleClick}>Add User</button>
        <br />
        {JSON.stringify(user)}
      </form>

      <div className="user-display">
        <h2>{JSON.stringify(display)}</h2>
        {display.map((item) => {
          return (
            <div className="user-control" key={item.id}>
              <p>
                {item.userName} ({item.age} years old)
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
