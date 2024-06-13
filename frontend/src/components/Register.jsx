// Register.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css"; // Import the CSS file

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
//   const [state, setState] = useState([]);

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };


//   useEffect(() => {
//     fetch("http://localhost:8000/api/patients")
//       .then((res) => res.json())
//       .then((data) => setState(data.message));
//   }, []);

//   console.log("conme frmo state", state);

  return (
    <div className="register-container">
      <h3>Register</h3>
      <form className="register-form" onSubmit={handleRegister}>
        <div className="form-group mb-3 mt-3 mb-3">
          <label className="form-label mb-3">Your Name:</label>
          <input
            style={{ width: "100%" }}
            name="text"
            value={input.username}
            onChange={(e) =>
              setInput({
                ...input,
                name: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label className="form-label mb-3">Your Email:</label>
          <input
            style={{ width: "100%" }}
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({
                ...input,
                email: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label className="form-label mb-3">Password:</label>
          <input
            style={{ width: "100%" }}
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({
                ...input,
                password: e.target.value,
              })
            }
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="login-link">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
