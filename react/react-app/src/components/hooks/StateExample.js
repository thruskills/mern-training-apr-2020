import React, {useState} from 'react';

function StateExample(){
    // state to maintain the counter
    
    const [year, setYear] = useState(2020);
    
    return(
        <div>
            <p>You are in {year} </p>
            <button onClick={()=> setYear(year+1)}>Click Me</button>
        </div>
    )
}

export default StateExample;