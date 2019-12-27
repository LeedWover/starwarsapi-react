import React from "react";

function Search({ item }) {
  return (
    <form className="col s12">
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input
            placeholder={`Search for ${item}`}
            type="text"
            className="validate"
          />
        </div>
      </div>
    </form>
  );
}

export default Search;
