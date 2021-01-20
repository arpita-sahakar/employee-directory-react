import { useEffect, useState } from "react";
import "./App.css";
import Header from "../components/Header/Header.jsx";
import Filter from "../components/Filter/Filter.jsx";
import Table from "../components/Table/Table";
import API from "../utils/API";

function App() {
  // state constants to store results from api-call
  const [result, setResult] = useState([]);
  const [sortCategory, setSortCategory] = useState("");

  const sortEmployees =(orderBy, propertyClicked)=>{
    let firstValue = 1;
    let secondValue = -1;
    if (orderBy === "descending"){
      firstValue = -1;
      secondValue = 1;
    }
     // sort result based on property clicked
     if (propertyClicked === "nme") {
      setResult(
        result.map((r) => r).sort((a, b) => (a.name > b.name ? firstValue : secondValue))
      );
    } else if (propertyClicked === "eml") {
      setResult(
        result.map((r) => r).sort((a, b) => (a.email > b.email ? firstValue : secondValue))
      );
    } else if (propertyClicked === "dob") {
      setResult(result.map((r) => r).sort((a, b) => (a.dob > b.dob ? firstValue : secondValue)));
    } else if (propertyClicked === "cont") {
      setResult(result.map((r) => r).sort((a, b) => (a.contact > b.contact ? firstValue : secondValue)));
    }
    // sort the result based on the property clicked
  }

  const handleClick = (propertyClicked) => {
    console.log(propertyClicked);
   sortEmployees("ascending", propertyClicked);
  };

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
        alert("something went wrong..:(");
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Filter />
      <Table employees={result} handleClick={handleClick} />
    </div>
  );
}

export default App;
