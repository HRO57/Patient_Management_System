// Home.js
import React from "react";
import { Link } from "react-router-dom";
import '../styles.css'; // Import the CSS file

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to the Patient Management System</h1>
            <p>Manage your patients efficiently with our user-friendly system. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et commodo neque. Phasellus sed ligula justo.</p>
            <div className="action-buttons">
                <Link to="/patients-list" className="btn btn-primary">View Patient List</Link>
                <Link to="/patients/create" className="btn btn-secondary">Add New Patient</Link>
            </div>
            <div className="features">
                <h2>Key Features:</h2>
                <ul>
                    <li><span>Manage patient records</span></li>
                    <li><span>Schedule appointments</span></li>
                    <li><span>Track medical history</span></li>
                    <li><span>Generate reports</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
