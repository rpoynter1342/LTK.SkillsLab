import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {useSelector, useDispatch} from 'react-redux'
import {deleteTodo} from './actions'

const Todo = () => {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    console.log(todos)
    return(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((value, index) => (
            <ListItem
            key={index}
            disableGutters
            secondaryAction={
                <IconButton aria-label="comment" onClick={() => dispatch(deleteTodo(index))}>
                <DeleteIcon />
                </IconButton>
            }
            >
            <ListItemText primary={value.payload} />
            </ListItem>
        ))}
        </List>
    )
};

export default Todo;