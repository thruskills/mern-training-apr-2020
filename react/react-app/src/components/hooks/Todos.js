import React, {useState} from 'react';

function Todo({name, index, status, toggleStatus, removeTodo}){
    const style = {textDecoration : status ? "line-through" : "" };
    return(
        <div>
            <span style={style}>{name}</span>
            <span>
                <button onClick={() => toggleStatus(index)}>Done</button>
            </span>
            <span>
                <button onClick={() => removeTodo(index)}>Remove</button>
            </span>
        </div>
    )
}

function Todos (){

    // since we do not have state as in the class based components

    const [todos, setTodos] = useState([
        {
            "name":"Learn React Hooks",
            "done": false
        },{
            "name":"useSate Hook",
            "done": true
        },{
            "name":"useEffect Hook",
            "done": false
        }
    ]);

    const [value, setValue] = useState('');

    const toggleStatus = index => {
        const newTodos = [...todos]; //spread operator to copy the data from todos to newTodos
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    };

    const addTodo = (event) => {
        event.preventDefault();
        const newTodos = [...todos, {"name":value, "done":false}];
        setTodos(newTodos);
        setValue('');
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return(
        <div>
            <h1>Todo's</h1>
            <ul style={{listStyle: "none"}}>
                {
                    todos.map((todo, index) => (
                        <li key={index} style={{backgroundColor: "#eee", margin: "10px", fontSize: "16px", padding: "10px"}}>
                            <Todo 
                                key={index} 
                                index={index} 
                                name={todo.name} 
                                status={todo.done} 
                                toggleStatus={toggleStatus} 
                                removeTodo={removeTodo}
                            />
                        </li>
                    ))
                }
            </ul>

            <form onSubmit={addTodo}>
                <input
                    placeholder="Enter text"
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </div>
    )
}
export default Todos;