import React from 'react';
import Child from '../Child/Child';

// changed to class based component
class CountingParent extends React.Component {

    // initializing the state
    state = {
        // set initial value for count = 0
        count: 0
    }

    // we moved this function to the class 
    // receives an event object - js events class (event event, evt, e)
    handleAction = (event) => {
        console.log('Child says', event);
        // every time this method is called
        // it updates the state using the setState
        this.setState({
            count: this.state.count + 1
        })
    }

    // we define a render method
    render(){
        return (
            <div>
                
                {/* pass the method to the child componet */}
                <Child onAction={this.handleAction} />

                {/* Use the count state to print the value */}
                <p>Clicked {this.state.count} times</p>
            </div>
        )
    }
}

export default CountingParent;

// this keyword in JavaScript itself is a subject