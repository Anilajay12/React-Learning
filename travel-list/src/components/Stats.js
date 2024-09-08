export function Stats({ items }) {
  if (items.length === 0)
    return <p className="stats">Start Packing the Items to fly ✈️</p>;

  const noOfItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / noOfItems) * 100);

  if (percentage === 100) {
    return <p className="stats">All Set to Go... Start Flying 🧳</p>;
  }
  return (
    <div className="stats">
      <em>
        You have {noOfItems} Items in the list and you packed: {packedItems} (
        {percentage}%)
      </em>
    </div>
  );
}
