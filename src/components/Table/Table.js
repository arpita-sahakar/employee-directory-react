const Table = (props) => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">DoB</th>
          <th scope="col">Contact</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((emp) => {
          return (
            <tr>
              <th scope="row">{emp.name}</th>
              <td>{emp.email}</td>
              <td>{emp.dob}</td>
              <td>{emp.contact}</td>
            </tr>
          );
        })}

      </tbody>
    </table>
  );
};

export default Table;
