import React, { useEffect } from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";
import { compose } from "../../utils";
import { filterItems } from "../../utils";
import { searchItems } from "../../utils";
import { withItemService } from "../hoc";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import {
  fetchItems,
  ItemRemovedFromList,
  ItemSetDone,
  ItemSetImportant,
} from "../../actions";

const TodoList = ({
  items,
  filter,
  search,
  loading,
  error,
  onToggleImportant,
  onToggleDone,
  onDelete,
  fetchItems,
}) => {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const visibleItems = searchItems(filterItems(items, filter), search);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <ul className="todo-list list-group">
      {visibleItems.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <li key={id} className="list-group-item">
            <TodoListItem
              {...itemProps}
              onToggleImportant={() => onToggleImportant(id)}
              onToggleDone={() => onToggleDone(id)}
              onDelete={() => onDelete(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ items, filter, search, loading, error }) => {
  return { items, filter, search, loading, error };
};

const mapDispatchToProps = (dispatch, { itemService }) => {
  return bindActionCreators(
    {
      fetchItems: fetchItems(itemService),
      onDelete: ItemRemovedFromList,
      onToggleDone: ItemSetDone,
      onToggleImportant: ItemSetImportant,
    },
    dispatch
  );
};

export default compose(
  withItemService(),
  connect(mapStateToProps, mapDispatchToProps)
)(TodoList);
