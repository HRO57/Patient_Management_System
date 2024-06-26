import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../styles.css"; // Import the CSS file

function Sidebar() {
  return (
    <div className="d-flex">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-column sidebar">
        <Link className="navbar-brand d-flex align-items-center" to="/home-page">
          <b className="p-2 rounded text-light bg-dark-on-hover">Patient Management System</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-column">
            <li className="nav-item ">
              <Link className="nav-link" to="/patients-list">
                Patient List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/patients/create">
                Add Patient
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            {/* Conditional rendering based on authentication status */}
            {/* {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </nav>
      <div className="flex-grow-1 p-3">
        {/* Content goes here */}
      </div>
    </div>
  );
}

export default Sidebar;
