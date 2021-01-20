import { useEffect, useState } from "react";
import "./App.css";
import Header from "../components/Header/Header.jsx";
import Filter from "../components/Filter/Filter.jsx";
import Table from "../components/Table/Table";
import API from "../utils/API";

function App() {
  // state constants to store results from api-call
  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState("");

  //With this function descending sort can also be handled
  const sortEmployees = (orderBy, propertyClicked) => {
    let firstValue;
    let secondValue;

    if (orderBy === "ascending") {
      firstValue = 1;
      secondValue = -1;
    } else if (orderBy === "descending") {
      firstValue = -1;
      secondValue = 1;
    }
    // sort result based on property clicked on ascending order
    if (propertyClicked === "nme") {
      setResult(
        result
          .map((r) => r)
          .sort((a, b) => (a.name > b.name ? firstValue : secondValue))
      );
    } else if (propertyClicked === "eml") {
      setResult(
        result
          .map((r) => r)
          .sort((a, b) => (a.email > b.email ? firstValue : secondValue))
      );
    } else if (propertyClicked === "dob") {
      setResult(
        result
          .map((r) => r)
          .sort((a, b) => (a.dob > b.dob ? firstValue : secondValue))
      );
    } else if (propertyClicked === "cont") {
      setResult(
        result
          .map((r) => r)
          .sort((a, b) => (a.contact > b.contact ? firstValue : secondValue))
      );
    }
  };
  const filterData = (data) => {
    let resultAfterFilter = data.filter(
      (employee) => employee.name.toLowerCase().indexOf(filter) > -1
    );
    return resultAfterFilter;
  };
  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
  };

  const handleClick = (propertyClicked) => {
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
      <Filter handleChange={handleChange} filter={filter} />
      <Table employees={filterData(result)} handleClick={handleClick} />
    </div>
  );
}

export default App;
