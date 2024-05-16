import logo from "../logo.svg";
import "../App.css";
import React, { useState, useEffect } from "react";
import DataController from "../models/DataController";
import { useNavigate } from "react-router-dom";

function ListStudent() {
  const navigate = useNavigate();
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    return () => {
      DataController.loadData();
      setStudentList([...DataController.dataList]);
    };
  }, []);

  function openEditStudent(index) {
    console.log(index);
    DataController.setCurrentIndex(index);

    navigate("/edit-student");
  }

  function deleteStudent(index) {
    //Cach 1:
    // if(!window.confirm('Are you sure to delete this student?')) {
    // 	return
    // }
    // DataController.deleteStudent(index)
    // setStudentList([...DataController.dataList])

    //Cach 2:
    DataController.setCurrentIndex(index);

    navigate("/delete-student");
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header bg-info text-white">List Student</div>
        <div className="card-body">
          <a href="/add-student">
            <button className="btn btn-success mb-3">Add Student</button>
          </a>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Address</th>
                <th style={{ width: "180px" }}></th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((std, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{std.fullname}</td>
                  <td>{std.email}</td>
                  <td>{std.age}</td>
                  <td>{std.address}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => openEditStudent(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ "margin-left": "10px" }}
                      onClick={() => deleteStudent(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListStudent;
