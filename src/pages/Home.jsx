import logo from "../logo.svg";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="list-student" rel="noopener noreferrer">
          List Student Page
        </a>
        <a className="App-link" href="add-student" rel="noopener noreferrer">
          Add Student Page
        </a>
        <a className="App-link" href="edit-student" rel="noopener noreferrer">
          Edit Student Page
        </a>
        <a className="App-link" href="delete-student" rel="noopener noreferrer">
          Delete Student Page
        </a>
      </header>
    </div>
  );
}

export default Home;
