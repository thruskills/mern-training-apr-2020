import React from 'react';

export default class ShallowMerge extends React.Component {
    state = {
        score: 7, 
        user: {
            name: "somebody",
            age: 26 
        },
        projects: [ /*...*/ ] 
    }

    deepMerge = (event) => {
        console.log(event)
        this.setState({score: 42})
    }

    shallowMerge = (event) => {
        console.log(event)
        this.setState({user: {age: 35}})
    }
   
    render(){
        return (
            <div>
                <button onClick={this.deepMerge}>Deep Merge</button>
                <button onClick={this.shallowMerge}>Shallow Merge</button>
            </div>
        )
    }
}