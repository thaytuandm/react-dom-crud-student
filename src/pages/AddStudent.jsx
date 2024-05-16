import logo from "../logo.svg";
import "../App.css";
import React, { useState, useEffect } from "react";
import DataController from "../models/DataController";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    return () => {
      DataController.loadData();
    };
  }, []);

  function addStudent(e) {
    let std = {
      fullname: fullname,
      email: email,
      age: age,
      address: address,
    };
    DataController.addStudent(std);

    navigate("/list-student");
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header bg-info text-white">Add Student</div>
        <div className="card-body">
          <div className="form-group">
            <label>Full Name: </label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter full name"
              className="form-control"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Age: </label>
            <input
              type="number"
              name="age"
              placeholder="Enter age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success" onClick={addStudent}>
              Save Student
            </button>
            <p>
              <a href="/list-student">Back to list</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
