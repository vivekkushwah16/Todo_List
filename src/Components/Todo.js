import React from 'react'
import { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { FiEdit } from "react-icons/fi";
import TodoForm from './TodoForm';
import FlipMove from 'react-flip-move';
const Todo = ({ todos, completeTodo, removeList, updateList }) => {
    const [edit, setEdit] = useState({
        value: '',
        id: ''
    })
    
    const submitUpdate = (todo) => {
        
        updateList(edit.id, todo);
        setEdit({
            value: '',
            id: ''
        })
    }
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    return (
        <FlipMove>
                {todos.map((item, index) => (
                    < div className = { item.isComplete ? "todo-row complete" : "todo-row " } key = { index } >
                        <div key={item.key} onClick={() => completeTodo(item.key)}>{item.text}</div>
                        <div className="icons">
                            <CancelIcon onClick={() => removeList(item.key)} className='remove_icon' />
                            <FiEdit onClick={() => setEdit({ id: item.key, value: item.text })} className='remove_icon' />
                        </div>
                    </div >
            ))}
    </FlipMove>
    )

}

export default Todo;
