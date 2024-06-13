import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Patient from '../pages/Patient';
import PatientCreate from '../pages/PatientCreate';
import PatientEdit from '../pages/PatientEdit';
import Login from '../components/Login';
import Register from '../components/Register';

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/home-page" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/patients-list" element={<Patient />} />
      <Route path="/patients/create" element={<PatientCreate />} />
      <Route path="/patients/:id/edit" element={<PatientEdit />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect unknown routes to Login */}
    </Routes>
  );
}

export default MyRouter;
