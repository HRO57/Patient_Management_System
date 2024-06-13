import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";
import "../styles.css";
import Navbar from "../components/Navbar";

function Patient() {
  const [patients, setPatients] = useState([]); // Initialize patients as an empty array
  const [loading, setLoading] = useState(true); // Initialize loading as true
  const [error, setError] = useState(null); // Initialize error as null
  const [currentPage, setCurrentPage] = useState(1); // Initialize current page as 1
  const [totalPages, setTotalPages] = useState(1); // Initialize total pages as 1
  const [successMessage, setSuccessMessage] = useState(""); // Initialize success message as an empty string
  const [searchTerm, setSearchTerm] = useState(""); // Initialize search term as an empty string

  const fetchPatients = useCallback((page, search) => {
    // Add a callback function to fetch patients
    setLoading(true);
    const query = search ? `&name=${search}` : "";
    axios
      .get(`http://127.0.0.1:8000/api/patients?page=${page}&limit=5${query}`) // Add query string parameter to the API endpoint
      .then((res) => {
        console.log("API Response:", res.data); // Log the response data
        const patientsData = Array.isArray(res.data.message)
          ? res.data.message
          : [];
        setPatients(patientsData);
        setTotalPages(res.data.last_page || 1); // backend provides totalPages
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Add a debounced effect to fetch patients
    const debouncedFetchPatients = debounce(() => {
      fetchPatients(currentPage, searchTerm);
    }, 500);

    debouncedFetchPatients();

    return () => {
      debouncedFetchPatients.cancel();
    };
  }, [currentPage, searchTerm, fetchPatients]);

  useEffect(() => {
    // Add an effect to fetch patients
    fetchPatients(currentPage, searchTerm);
  }, [currentPage, fetchPatients]);

  const handlePageChange = (newPage) => {
    // Add a function to handle page change
    setCurrentPage(newPage);
  };

  const handleDelete = (id) => {
    // Add a function to handle delete
    axios
      .delete(`http://127.0.0.1:8000/api/patients/${id}/delete`)
      .then((res) => {
        console.log("Patient deleted:", id);
        // Filter out the deleted patient from the list
        setPatients(patients.filter((patient) => patient.id !== id));
        setSuccessMessage("Patient deleted successfully.");
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error deleting patient:", error);
        // Handle error
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching patients: {error.message}</div>;
  }

  // Check if patients is an array before mapping over it
  if (!Array.isArray(patients)) {
    return <div>No patients data available</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Patient List
                  <Link
                    className="btn btn-primary btn-sm float-end"
                    to="/patients/create"
                  >
                    Add Patient
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((item, index) => (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                          <Link
                            to={`/patients/${item.id}/edit`}
                            className="btn btn-success mr-2 btn-sm button-custom"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-danger btn-sm mt-2 button-custom"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Patient;
