import React from 'react';
import {List, Label} from 'semantic-ui-react'

function Todo(props) {
    return (
        <div>
            <List divided selection>
                <List.Item>
                <Label color='red' horizontal>
                    Pending
                </Label>
                {props.text}
                </List.Item>
            </List>
        </div>
    )
}

export default Todo
