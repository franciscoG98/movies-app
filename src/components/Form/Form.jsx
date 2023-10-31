import { useState } from "react";
import "./formStyles.scss";

const Form = () => {

  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputSearch);
  }

  return (
    <form className="form_container">
      <fieldset className="form_fieldset">
        <label htmlFor="serach">Search your favorite series or movie</label>
        <input
          id="serach"
          type="text"
          placeholder="Search your favorite series or movie"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <input type="button" value={"Search"} onClick={(e) => handleSubmit(e)} />
      </fieldset>
    </form>
  )
}

export default Form