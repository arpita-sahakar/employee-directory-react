// Component for Filter section
const Filter = (props) => {
  return (
    <div>
      <form className="bg-moon-gray mw6 center pa1 br2-ns ba b--green bw3 mb4">
        <fieldset className="cf bn ma0 pa0">
          <div className="cf">
            <input
              className="f6 f5-1 input-reset bn fl black-80 bg-white pa3 lh-solid w-100"
              placeholder="Search..."
              type="text"
              name="employeeName"
              value={props.filter}
              id="employeeName"
              onChange={props.handleChange}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};
export default Filter;
