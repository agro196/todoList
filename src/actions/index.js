const itemsLoaded = (newItems) => {
  return {
    type: "FETCH_ITEMS_SUCCESS",
    payload: newItems,
  };
};

const itemsError = (error) => {
  return {
    type: "FETCH_ITEMS_FAILURE",
    payload: error,
  };
};

export const itemAddedToList = (label) => {
  return {
    type: "ITEM_ADDED_TO_LIST",
    payload: label,
  };
};

export const ItemRemovedFromList = (itemId) => {
  return {
    type: "ITEM_REMOVED_FROM_LIST",
    payload: itemId,
  };
};

export const ItemSetDone = (itemId) => {
  return {
    type: "ITEM_SET_DONE",
    payload: itemId,
  };
};

export const ItemSetImportant = (itemId) => {
  return {
    type: "ITEM_SET_IMPORTANT",
    payload: itemId,
  };
};

export const filterChanged = (buttonName) => {
  return {
    type: "FILTER_CHANGED",
    payload: buttonName,
  };
};

export const SearchChanged = (term) => {
  return {
    type: "SEARCH_CHANGED",
    payload: term,
  };
};

export const fetchItems = (itemService) => () => (dispatch) => {
  itemService
    .getItems()
    .then((data) => dispatch(itemsLoaded(data)))
    .catch((err) => dispatch(itemsError(err)));
};
