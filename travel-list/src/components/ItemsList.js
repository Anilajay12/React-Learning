import { useState } from "react";
import { Item } from "./Item";

export function ItemsList({
  items,
  onDeleteItem,
  onClearItems,
  onToggleItems,
}) {
  const [sortBy, SetSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items.sort((a, b) => a.id - b.id);
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  function clearItems() {
    onClearItems();
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => SetSortBy(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By description</option>
          <option value="packed">Sort By packed</option>
        </select>

        <button onClick={clearItems}>Clear List</button>
      </div>
    </div>
  );
}
