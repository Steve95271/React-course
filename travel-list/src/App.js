import { useState } from "react";

export default function App() {
  const [item, setItem] = useState([]);
  const items = item;

  function handleAddItem(newItem) {
    setItem((itemList) => [...itemList, newItem]);
  }

  /**
   * Remove item according to the id
   * @param itemId item id
   */
  function handleDeleteItem(itemId) {
    setItem((itemList) => itemList.filter((item) => item.id !== itemId));
  }

  /**
   * Check item according id
   * @param itemId item id
   */
  function handleCheckItem(itemId) {
    setItem((itemList) =>
      itemList.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem() {
    setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        itemList={item}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckItem}
        onClearItem={handleClearItem}
      />
      <Status items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🍵 Far Away 🧑‍💻</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { id: Date.now(), quantity, description, packed: false };

    setDescription("");
    setQuantity(1);

    onAddItem(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your lovely trip?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* Creating a list with length 20, element start from 1 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

function PackingList({ itemList, onDeleteItem, onCheckItem, onClearItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = itemList;
  }

  if (sortBy === "description") {
    sortedItems = itemList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = itemList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
      </div>

      <button onClick={() => onClearItem()}>CLEAR LIST</button>
    </div>
  );
}

function Item({ item, onDeleteItem, onCheckItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onCheckItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Status({ items }) {
  const numberOfItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentagePacked = Math.round((packedItems / numberOfItems) * 100);

  return (
    <footer className="stats">
      <em>
        You have {numberOfItems} items on your list, and you already packed{" "}
        {packedItems} ({percentagePacked ? percentagePacked : 0} %)
      </em>
    </footer>
  );
}
