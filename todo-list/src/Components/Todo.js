import React from 'react';
import {List, Label, Button} from 'semantic-ui-react'
import db from '../Firebase';

function Todo(props) {
    return (
        <div>
            <List divided selection>
                <List.Item>
                <Label color='red' horizontal>
                    Pending
                </Label>
                {props.todo.todo}
                </List.Item>
            </List>

            <Button inverted color='red' onClick={event => db.collection('todos').doc(props.todo.id).delete()}> Delete Me </Button>
        </div>
    )
}

export default Todo
