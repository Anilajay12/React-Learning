export function Item({ item, onDeleteItem, onToggleItems }) {
  function handleDeleteItem(id) {
    onDeleteItem(id);
  }

  function handlePackUpdate(id) {
    onToggleItems(id);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handlePackUpdate(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
