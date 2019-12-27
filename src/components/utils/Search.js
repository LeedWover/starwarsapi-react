import React, { useState } from "react";

function Search({ type, def,  set }) {
  const [text, setText] = useState("");
  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setText("");
    set(`${def}?search=${text}`);
  };

  const clearSearch = () => set(def);

  return (
    <form onSubmit={handleSubmit} className="col s12">
      <div className="row">
      <div className="input-field col s1 offset-s1">
          <input onClick={clearSearch} type="button" value="Clear" className="btn grey darken-1" />
        </div>
        <div className="input-field col s8">
          <input
            style={{ color: "#fff" }}
            placeholder={`Search for ${type}`}
            type="text"
            value={text}
            className="validate"
            onChange={handleChange}
          />
        </div>
        <div className="input-field col s1">
          <input type="submit" value="Search" className="btn" style={{ background: "#E6AB03" }} />
        </div>
      </div>
    </form>
  );
}

export default Search;
