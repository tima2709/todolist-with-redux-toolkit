import React, {useState, useEffect} from 'react'
import InputField from "./InputField";
import TodoList from "./TodoList";
import {useDispatch, useSelector} from "react-redux";
import {addNewTodo, fetchTodos} from "./store/todoSlice";

function App() {
    const [text, setText] = useState('')
    const {status, error} = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addNewTodo(text))
        setText('')
    }

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    return (
        <div className="App">
            <InputField
                text={text}
                handleInput={setText}
                handleSubmit={addTask}
            />

            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <TodoList/>
        </div>
    );
}

export default App;
