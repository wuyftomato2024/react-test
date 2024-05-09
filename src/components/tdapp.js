import { useState } from 'react';


let nextId = 0;

const TodoApp = () => {
 const [ todos, setTodos ] = useState([]);

 const addTodo = newTodo => {
   nextId = nextId + 1;
   setTodos([...todos, { id: nextId, text: newTodo }]);
 }

 const deleteTodo = id => {
   setTodos(todos.filter(todo => todo.id !== id));
 }    

 return (
   <>
     <TodoForm add={addTodo}></TodoForm>
     <TodoList todos={todos} del={deleteTodo}></TodoList>
   </>
 );
}

export default TodoApp;