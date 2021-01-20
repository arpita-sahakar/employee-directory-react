const Filter = () => {
  return (
    <div>
      <form className="bg-moon-gray mw7 center pa1 br2-ns ba b--black-10 mb4">
        <fieldset className="cf bn ma0 pa0">

          <div className="cf">

            <input
              className="f6 f5-1 input-reset bn fl black-80 bg-white pa3 lh-solid w-100"
              placeholder="Enter name to filter Employees"
              type="text"
              name="employeeName"
              value=""
              id="employeeName"
            />

          </div>
        </fieldset>
      </form>
    </div>
  );
};
export default Filter;
