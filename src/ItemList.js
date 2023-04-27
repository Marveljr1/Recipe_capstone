import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState([]);

  function handleAddItem() {
    const newItem = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`
    };

    setItems([...items, newItem]);
  }

  function handleDeleteItem(itemId) {
    const newItems = items.filter(item => item.id !== itemId);
    setItems(newItems);
  }

  return (
    <div>
      <h2>Items</h2>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;