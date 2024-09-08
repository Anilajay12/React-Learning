import { useState } from "react";
import "./index.css";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { ItemsList } from "./ItemsList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    if (!item.description) return;
    item.id = items.length + 1;
    item.packed = false;
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleClearItems() {
    setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <ItemsList
        items={items}
        onDeleteItem={handleDeleteItem}
        onClearItems={handleClearItems}
        onToggleItems={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
