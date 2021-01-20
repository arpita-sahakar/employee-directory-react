import { useEffect, useState } from "react";
import "./App.css";
import Header from "../components/Header/Header.jsx";
import Filter from "../components/Filter/Filter.jsx";
import Table from "../components/Table/Table";
import API from "../utils/API";

function App() {
  // state constants to store results from api-call
  const [result, setResult] = useState([]);

  useEffect(() => {
    // call API and set the result using set result
    API.fetchEmployees()
      .then((res) => {
        let formattedEmpDetails = res.data.results.map((emp) => {
          return {
            name: `${emp.name.first} ${emp.name.last}`,
            email: emp.email,
            dob: emp.dob.date,
            contact: emp.cell,
          };
        });
        setResult(formattedEmpDetails);
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong..:(")
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Filter />
      <Table employees={result} />
    </div>
  );
}

export default App;
