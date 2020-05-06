import React from "react";
import {Link, Route  } from 'react-router-dom';
import Topic from './Topic';


function Topics({ match }){
    console.log(match);
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    {/* /topics/components */}
                    <Link to={`${match.url}/components`}>Components</Link>
                    
                </li> 
                <li>
                    {/* /topics/pros-v-state */}
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link> 
                </li>
            </ul>
            {/* :id path parameter */}
            <Route path={`${match.path}/:id`} component={Topic} />
            <Route exact path={`${match.path}`} 
                render = {() => <h3>Please select a topic</h3>} 
            />

        </div>        
    )
}
export default Topics;