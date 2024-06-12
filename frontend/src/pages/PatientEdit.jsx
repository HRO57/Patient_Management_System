import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function PatientEdit() {
  const { id } = useParams(); // Get the patient ID from the URL
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch patient data
    axios.get(`http://127.0.0.1:8000/api/patients/${id}/edit`)
      .then((res) => {
        const patient = res.data.message;
        setName(patient.name);
        setDescription(patient.description);
        setEmail(patient.email);
        setPhone(patient.phone);
      })
      .catch((error) => {
        console.error("Error fetching patient data:", error);
        setErrors({ general: "Error fetching patient data" });
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create the patient object
    const patient = {
      name,
      description,
      email,
      phone,
    };

    // Make a PUT request to update the patient data
    axios.put(`http://127.0.0.1:8000/api/patients/${id}/edit`, patient)
      .then((res) => {
        console.log("Patient updated:", res.data);
        setSuccess(true);
        // Redirect to the patients list or show a success message
        navigate('/patients-list');
      })
      .catch((error) => {
        console.error("Error updating patient:", error);
        if (error.response && error.response.status === 422) {
          setErrors(error.response.data.message);
        } else {
          setErrors({ general: "Error updating patient" });
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Edit Patient
                <Link
                  className="btn btn-danger btn-sm float-end"
                  to="/patients-list"
                >
                  Back
                </Link>
              </h4>
            </div>
            <div className="card-body">
              {errors.general && <div className="alert alert-danger">{errors.general}</div>}
              {success && <div className="alert alert-success">Patient updated successfully!</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                  {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientEdit;
