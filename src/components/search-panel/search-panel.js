import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SearchChanged } from "../../actions";

import "./search-panel.css";

const SearchPanel = ({ onSearchChange = () => {} }) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      onSearchChange: SearchChanged,
    },
    dispatch
  );
};

export default connect(undefined, mapDispatchToProps)(SearchPanel);
