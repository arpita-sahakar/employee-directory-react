// Component for showing Table section based on result
import "./Table.css";

const Table = (props) => {
  return (
    <div className = "ml4 mr4" >
      <table className="table">
        <thead className="thead-dark">
          <tr>
          
            <th scope="col" className ="tableHead" onClick={()=>{props.handleClick("name")}}>Name </th>
            <th scope="col" className ="tableHead"onClick={()=>{props.handleClick("email")}}>Email</th>
            <th scope="col" className ="tableHead" onClick={()=>{props.handleClick("dob")}}>Date Of Birth</th>
            <th scope="col" className ="tableHead" onClick={()=>{props.handleClick("contact")}}>Contact</th>
            <th scope="col" className ="tableHead" >Picture</th>
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
                <td><img alt="picture" src={emp.url}/></td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
