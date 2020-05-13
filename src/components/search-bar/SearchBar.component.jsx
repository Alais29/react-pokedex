import React from "react";

const SearchBar = ({ search, handlechange }) => (
  <form className="d-flex mb-4">
    <input
      className="form-control"
      type="text"
      placeholder="Search by name"
      value={search}
      onChange={handlechange}
    />
    {/* <button className="btn btn-warning">Go!</button> */}
  </form>
);

export default SearchBar;
