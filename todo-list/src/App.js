import {useState, useEffect} from 'react';
import { Button, Input, Container } from 'semantic-ui-react';
import Todo from './Components/Todo'
import db from './Firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads we need to listen to the database to fetch todos 
  //useEffect(function, dependencies)
  useEffect(()=> {
    //this code fires when app loads
    //this will give us a snapshot of the moment of the database. whenever database changes snapshot will be taken
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id : doc.id ,todo : doc.data().todo})))
    })
  },[input])

  const addTodo = (event) => {
    // prevent refresh the page after submit
    event.preventDefault();
    
    // add records to database. collection named as todos, document named as todo
    db.collection('todos').add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })

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
              <Todo todo={todo}/>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default App;
