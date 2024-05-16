import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import DeleteStudent from "./pages/DeleteStudent";
import ListStudent from "./pages/ListStudent";

// B1. Nhung thu vien su dung
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student" element={<EditStudent />} />
        <Route path="/delete-student" element={<DeleteStudent />} />
        <Route path="/list-student" element={<ListStudent />} />
      </Routes>
    </>
  );
}

export default App;
