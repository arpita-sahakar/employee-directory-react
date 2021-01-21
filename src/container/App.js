import { useEffect, useState } from "react";
import "./App.css";
import Header from "../components/Header/Header.jsx";
import Filter from "../components/Filter/Filter.jsx";
import Table from "../components/Table/Table";
import API from "../utils/API";

function App() {
  // state constant to store results from api-call
  const [result, setResult] = useState([]);
  // state constant to store filtered string entered by user
  const [filter, setFilter] = useState("");
  // state constant to store the order of the data and property clicked
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
  // function to filter data by name, email , contact & dob.
  const filterData = (data) => {
    let resultAfterFilter = data.filter(
      (employee) =>
        employee.name.toLowerCase().indexOf(filter) > -1 ||
        employee.email.toLowerCase().indexOf(filter) > -1 ||
        employee.dob.toLowerCase().indexOf(filter) > -1 ||
        employee.contact.toLowerCase().indexOf(filter) > -1
    );
    return resultAfterFilter;
  };
  // This function is called when user enters something in the search box and 
  //it gets stored to filter state variable
  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
  };

  // This function is called when user click any of the column headings 
  // and on every alternative clicks the data gets sorted in ascending and descending order
  const handleClick = (propertyClickedKey) => {

    // logic to handle the order. If the order is ascending on next click it is changed to descending. 
    // And the current orderState and property clicked gets stored to sortField variable. 
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

  // This hook is invoked when the page is loaded
  useEffect(() => {
    // call API and set the result using set result
    API.fetchEmployees()
      .then((res) => {
        console.log(res.data);
        let formattedEmpDetails = res.data.results.map((emp) => {
          return {
            name: `${emp.name.first} ${emp.name.last}`,
            email: emp.email,
            dob: emp.dob.date,
            contact: emp.cell,
            url: emp.picture.thumbnail,
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
