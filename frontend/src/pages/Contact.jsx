// Contact.jsx
import React from "react";
// import { Link } from "react-router-dom";
import '../styles.css'; // Import the CSS file

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="title text-center mb-4 mt-4 ">Contact Us</h1>
            <p>Do you have any questions or feedback? We'd love to hear from you! Feel free to reach out to us using the contact information below:</p>
            <div className="contact-info">
                <p>Email: info@patientmanagementsystem.com</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Address: 123 Main Street, City, Country</p>
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

export default Contact;
