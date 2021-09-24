import React from "react";

import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";

const App = () => {
  return (
    <div className="todo-app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList />
      <ItemAddForm />
    </div>
  );
};

export default App;
