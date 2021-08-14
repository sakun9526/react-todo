import {useState} from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    // prevent refresh the page after submit
    event.preventDefault();
    //this will trigger when button clicks
    setTodos([...todos,input]);
    // clear the input box after submitting
    setInput('');

  }

  return (
    <div className="App">
      <h1>TODO App <span style={{fontSize:"50px"}}>&#9749;</span></h1>
      <div>
        <form>
          <input value={input} onChange={event => setInput(event.target.value)}/>
          <button onClick={addTodo} type="submit">Submit</button>
        </form>
      </div>

      <div>
        <ul>
          {todos.map(todo =>(
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
