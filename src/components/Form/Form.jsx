import { useState } from "react";
import "./formStyles.scss";

const Form = () => {
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputSearch);
  };

  return (
    <form className="form_container" onSubmit={(e) => handleSubmit(e)}>

      <label htmlFor="serach">Search your favorite series or movie:</label>

      <br />

      <fieldset>
        <input
          id="serach"
          type="text"
          name="serach"
          placeholder="Search your favorite series or movie"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          autoFocus='1'
          required
          aria-label="Search your favorite series or movie"
        />

        <button type="submit" aria-labelledby="Search movie or serie" role="button">Search</button>
      </fieldset>
    </form>
  );
};

export default Form;
