import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [item, setItem] = useState([]);

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

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        itemList={item}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckItem}
      />
      <Status />
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

    const newItem = { id: Date.now(), quantity, description, packed: false };

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

function PackingList({ itemList, onDeleteItem, onCheckItem }) {
  return (
    <div className="list">
      <ul>
        {itemList.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>
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

function Status() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
