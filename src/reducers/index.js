const toggleProperty = (arr, id, propName) => {
  const idx = arr.findIndex((item) => item.id === id);
  const oldItem = arr[idx];
  const value = !oldItem[propName];

  const item = { ...arr[idx], [propName]: value };
  return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
};

const initialState = {
  items: [],
  loading: true,
  error: null,
  filter: "all",
  search: "",
};

export const reducer = (state = initialState, action) => {
  const { items } = state;

  switch (action.type) {
    case "FETCH_ITEMS_SUCCESS":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case "FETCH_ITEMS_FAILURE":
      return {
        ...state,
        items: [],
        loading: false,
        error: action.payload,
      };

    case "ITEM_ADDED_TO_LIST":
      const newItem = {
        id: items.length + 1,
        label: action.payload,
        important: false,
        done: false,
      };
      return {
        ...state,
        items: [...state.items, newItem],
      };

    case "ITEM_REMOVED_FROM_LIST":
      const itemId = action.payload;
      const itemIdx = items.findIndex((item) => item.id === itemId);

      return {
        ...state,
        items: [...items.slice(0, itemIdx), ...items.slice(itemIdx + 1)],
      };

    case "ITEM_SET_DONE":
      return {
        ...state,
        items: toggleProperty(items, action.payload, "done"),
      };

    case "ITEM_SET_IMPORTANT":
      return {
        ...state,
        items: toggleProperty(items, action.payload, "important"),
      };

    case "FILTER_CHANGED":
      return {
        ...state,
        filter: action.payload,
      };

    case "SEARCH_CHANGED":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
