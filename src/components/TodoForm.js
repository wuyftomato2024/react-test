import { useState } from "react";
import { Navigate } from "react-router-dom";

const TodoForm = ({ add }) => {
    const [newTodo, setNewtodo] = useState("");

    const handleChange = (event) => setNewtodo(event.target.value);

    const addTodo = () => {
        if (newTodo === "") return;
        add(newTodo);
        setNewtodo("");
    };


    return (
        <>
            <h1> my todo</h1>
            <input value={newTodo} onChange={handleChange} placeholder="押す"></input>
            <button onClick={addTodo}>追加</button>
        </>
    );


};




export default TodoForm;

