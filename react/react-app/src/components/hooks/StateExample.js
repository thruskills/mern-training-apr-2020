import React, {useState} from 'react';

function StateExample(){
    // state to maintain the counter
    
    const [year, setYear] = useState(2020);
    const [todos, setTodos] = useState([
            {'name':'Do somthing','status':'Pending'},
            {'name':'Do somthing else','status':'Done'},
        ]);

    return(
        <div>
            <p>You are in {year} </p>
            <button onClick={()=> setYear(year+1)}>Click Me</button>

            <h2>Todo App</h2>
            {
                todos.map((item) => {
                    return (
                        <div>
                            <input type="checkbox" />
                            <span>{item.name}</span>
                            <br />
                        </div>
                    )
                }
            )
            }
        </div>
    )
}

export default StateExample;