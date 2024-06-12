// About.js
import React from "react";
// import { Link } from "react-router-dom";
import "../styles.css"; // Import the CSS file

function About() {
  return (
    <div className="about-container">
      <h1 className="title text-center mb-4 mt-4    ">About Patient Management System</h1>
      <p>
        The Patient Management System is a comprehensive software solution
        designed to streamline the management of patient data in healthcare
        facilities. From small clinics to large hospitals, our system provides
        robust features to simplify administrative tasks and improve patient
        care.
      </p>
      <p>
        With our user-friendly interface and powerful functionality, healthcare
        providers can efficiently manage patient records, schedule appointments,
        track medical history, and generate reports. By centralizing patient
        information and automating repetitive tasks, healthcare professionals
        can focus more on delivering quality care to their patients.
      </p>
      <div className="features">
        <h2>Key Features:</h2>
        <ul>
          <li>Manage patient records</li>
          <li>Schedule appointments</li>
          <li>Track medical history</li>
          <li>Generate reports</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
