import React from "react";
import { Link } from "react-router-dom";
import '../styles.css'; // Import the CSS file
import Sidebar from "../components/Navbar";

function Home() {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1 p-3">
                <div className="home-container">
                    <h2>Welcome to the Patient Management System</h2>
                    <p className="mt-5">Manage your patients efficiently with our user-friendly system. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et commodo neque. Phasellus sed ligula justo.</p>
                    <div className="action-buttons">
                        <Link to="/patients-list" className="btn btn-primary">View Patient List</Link>
                        <Link to="/patients/create" className="btn btn-success">Add New Patient</Link>
                    </div>
                    <div className="features">
                        <ul className="d-flex mt-5">
                            <li><span>Patient records</span></li>
                            <li><span>Schedule appointments</span></li>
                            <li><span>Medical history</span></li>
                            <li><span>Generate reports</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
