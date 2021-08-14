import {useState} from 'react';
import { Button, Input, Container } from 'semantic-ui-react';
import Todo from './Components/Todo'

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
    <div>
      <Container textAlign='center'>
        <h1>TODO App <span style={{fontSize:"50px"}}>&#9749;</span></h1>
        <div>
          <form>
            <Input value={input} onChange={event => setInput(event.target.value)}/>
            <Button primary onClick={addTodo} type="submit" disabled={!input}>Submit</Button>
          </form>
        </div>

        <div>
          <ul>
            {todos.map(todo =>(
              <Todo text={todo}/>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default App;
