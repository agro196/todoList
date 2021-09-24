const filterItems = (items, filter) => {
  switch (filter) {
    case "all":
      return items;
    case "active":
      return items.filter((item) => !item.done);
    case "done":
      return items.filter((item) => item.done);
    default:
      return items;
  }
};

export default filterItems;
