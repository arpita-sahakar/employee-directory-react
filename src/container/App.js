import { useEffect, useState } from "react";
import "./App.css";
import Header from "../components/Header/Header.jsx";
import Filter from "../components/Filter/Filter.jsx";
import Table from "../components/Table/Table.jsx";
import API from "../utils/API";

function App() {
  // state constants to store results from api-call
  const [result, setResult] = useState([]);

  useEffect(() => {
    // call API and set the result using set result
    API.fetchEmployees()
      .then((res) => {
        setResult(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Filter />
      <Table listOfEmployees={result} />
    </div>
  );
}

export default App;
