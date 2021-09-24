import React from "react";
import { connect } from "react-redux";
import "./app-header.css";

const AppHeader = ({ items }) => {
  const doneCount = items.filter((item) => item.done).length;
  const toDoCount = items.length - doneCount;
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {toDoCount} more to do, {doneCount} done
      </h2>
    </div>
  );
};

const mapStateToProps = ({ items }) => {
  return { items };
};

export default connect(mapStateToProps)(AppHeader);
