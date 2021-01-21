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
  const [sortField, setSortField] = useState({
    propertyClicked: "",
    orderBy: "ascending",
  });

  // sort result based on property clicked on ascending  and descending order
  const sortEmployees = (orderBy, propertyClicked) => {
    if (orderBy === "ascending") {
      setResult(
        result
          .map((r) => r)
          .sort((a, b) => (a[propertyClicked] > b[propertyClicked] ? 1 : -1))
      );
    } else if (orderBy === "descending") {
      setResult(
        result
          .map((r) => r)
          .sort((a, b) => (a[propertyClicked] > b[propertyClicked] ? -1 : 1))
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

  const handleClick = (propertyClickedKey) => {
    let sortedOrder = "ascending";
    if (
      sortField.propertyClicked === propertyClickedKey &&
      sortField.orderBy === "ascending"
    ) {
      sortedOrder = "descending";
    }
    setSortField({ propertyClicked: propertyClickedKey, orderBy: sortedOrder });

    sortEmployees(sortedOrder, propertyClickedKey);
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
