import "./Table.css";

const Table = (props) => {
  return (
    <div className = "ml4 mr4" >
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className ="tableHead" onClick={()=>{props.handleClick("nme")}}>Name </th>
            <th scope="col" className ="tableHead"onClick={()=>{props.handleClick("eml")}}>Email</th>
            <th scope="col" className ="tableHead" onClick={()=>{props.handleClick("dob")}}>Date Of Birth</th>
            <th scope="col" className ="tableHead" onClick={()=>{props.handleClick("cont")}}>Contact</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((emp, i) => {
            return (
              <tr key = {i}>
                <th scope="row">{emp.name}</th>
                <td>{emp.email}</td>
                <td>{emp.dob}</td>
                <td>{emp.contact}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
