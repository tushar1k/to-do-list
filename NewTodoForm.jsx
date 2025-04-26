import React from 'react';
import { useState } from 'react';

export function NewTodoForm({ onSubmit }) {
  // const { onSubmit } = props;
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target?.[0].value === '') return;

    onSubmit(e.target?.[0].value);

    setNewItem('');
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlfor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </>
  );
}
