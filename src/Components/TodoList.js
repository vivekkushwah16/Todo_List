import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import useLocalStorage from "use-local-storage";


const TodoList = () => {
    const [list, setList] = useState([]);
    const [todo, setTodos] = useLocalStorage("todos");
    


    //    -----------------------Add Items In List-----------------------------------

    const addList = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newList = [...list, todo];
        setList(newList);
        setTodos(newList)
    }


    //    -----------------------Update Items In List-----------------------------------




    const updateList = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev =>
            prev.map(item =>
                (item.key === todoId ? newValue : item)))
    }



    //    -----------------------Delete Items From List-----------------------------------

    const removeList = id => {
        setTodos(list.filter((element) => element.key !== id))
        

    }

    //-------------------------- Change class of Row ------------------------------------


    const completeTodo = (id) => {
        console.log("clicked");
        console.log(id)
        const updatedTodo = list.map((item) => {
            if (item.key === id) {
                console.log(item.isComplete);
                item.isComplete = !item.isComplete;
            }
            return item;
        });
        // setList(updatedTodo);
        setTodos(updatedTodo)
    }

    return (
        <>
        <div className="todo-app">
            <h1>What's the plane for Today?</h1>
            <TodoForm onSubmit={addList} />
          
             <Todo todos={todo} completeTodo={completeTodo} removeList={removeList} updateList={updateList} />
            
        </div>

        </>
    )
}

export default TodoList;
