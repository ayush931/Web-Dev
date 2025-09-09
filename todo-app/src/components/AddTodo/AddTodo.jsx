import { useState } from 'react';

function AddTodo({ updateTodo }) {
  const [inputText, setInputText] = useState('');
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="add your next todo..."
      />
      <button onClick={() => updateTodo(inputText)}>add</button>
    </div>
  );
}

export default AddTodo;
