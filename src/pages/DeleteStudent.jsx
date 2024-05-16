import logo from "../logo.svg";
import "../App.css";
import React, { useState, useEffect } from "react";
import DataController from "../models/DataController";
import { useNavigate } from "react-router-dom";

function DeleteStudent() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    fullname: "",
    email: "",
    age: "",
    address: "",
  });

  useEffect(() => {
    return () => {
      DataController.loadData();
      let index = DataController.getCurrentIndex();
      setStudent(DataController.dataList[index]);
    };
  }, []);

  function deleteStudent() {
    let index = DataController.getCurrentIndex();
    DataController.deleteStudent(index);

    navigate("/list-student");
  }

  return (
    <div className="App">
      <p>Full Name: {student.fullname}</p>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      <p>Address: {student.address}</p>
      <button className="btn btn-danger" onClick={deleteStudent}>
        Are you sure to delete this student?
      </button>
      <p>
        <a href="/list-student">Back to list</a>
      </p>
    </div>
  );
}

export default DeleteStudent;
