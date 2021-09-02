import React from 'react';
import { useState,useEffect,useRef } from 'react';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
const TodoForm=(props)=> {
    const[input,setInput]=useState(props.edit?props.edit.value:"");
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    })
    const handleChange=(event)=>{
        setInput(event.target.value);
    }
    const  handleSubmit =event=>{
        event.preventDefault();
         props.onSubmit({
             key:Date.now(),
             text:input,
             isComplete:false,
         })
        setInput('')
       
    }
    return (
        <>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input type="text" placeholder={props.edit ?"Updating....":"Add a task here..."} value={input} name="text" 
                className={props.edit?"todo-input edit":"todo-input"} onChange={handleChange} autoComplete="off" ref={inputRef}/>
                <button className={props.edit?"todo-button":"todo-button edit"} type="submit" variant="outlined">{props.edit?"Update" :<AddRoundedIcon />}</button>
            </form>
        </>
    )
}

export default TodoForm;
