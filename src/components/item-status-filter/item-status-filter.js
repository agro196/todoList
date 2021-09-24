import React from "react";
import { bindActionCreators } from "redux";
import { filterChanged } from "../../actions";
import { connect } from "react-redux";

const filterButtons = [
  { name: "all", label: "All" },
  { name: "active", label: "Active" },
  { name: "done", label: "Done" },
];

const ItemStatusFilter = ({ filter, onFilterChange = () => {} }) => {
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames =
      "btn " + (isActive ? "btn-info" : "btn-outline-secondary");

    return (
      <button
        key={name}
        type="button"
        onClick={() => onFilterChange(name)}
        className={classNames}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

const mapStateToProps = ({ filter }) => {
  return { filter };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      onFilterChange: filterChanged,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemStatusFilter);
