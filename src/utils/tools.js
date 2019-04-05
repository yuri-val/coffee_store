
export const removeItem = (items, index) =>
  items.slice(0, index).concat(items.slice(index, items.length))
