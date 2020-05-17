import React, { Component } from "react";
import PropTypes from "prop-types";

const Search = (props) => {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control"
        type="search"
        aria-label="Search"
        placeholder={props.placeholder}
        onChange={props.doSearch}
        value={props.keyword}
      />
    </form>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Search;
