import { useState } from 'react'


function App() {
// Step 1: Create state for Todos
const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");


// step 2: Function to add todo
const addTodo = () => {
  if (input.trim() === "") return; // ignore empty input
  setTodos([...todos, input]); // add new todo
  setInput(""); // clear input
}

return (
  <div style={{padding: "20px"}}>
<h1>Todo App</h1>

        {/* Input field */}
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add Task'/>

          {/* Add button */}
          <button onClick={addTodo}>Add</button>

           {/* Todo list */}
           <ul>
          {todos.map((todo, index) => 
          <li key={index}>{todo}</li>
          )}


           </ul>
  </div>
)


}

export default App
