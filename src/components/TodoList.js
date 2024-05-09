const TodoList =({todos,del})=>{
    return(
        <>
        <h5>Todo List</h5>
        <ul>
            {
                todos.map(todo =>{
                    return(
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={()=>del(todo.id)}>DEL</button>
                        </li>
                    )
                })
            }
        </ul>
        </>





    );



}

export default TodoList;