import React from 'react';

class LifecycleDemo extends React.Component {
 
    // Initialize state first
    // (happens before constructor)
    // 
    state = {counter: 0, causeError: false};

    // we are overridding the defualt constructor
    // in other languages - constructor method name is usually the name of the class
    // in js we have a speecial name for constructor method 
    // The first method called after initializing state
    constructor(props) {
        // super keyword is used to refer to its parent
        // in this case parent React.Component 
        super(props);
        console.log('[constructor]');
        console.log('State already set: ', this.state);
    }

    // ** Don't forget to make this `static`! **
    // Called before initial render, and any time new props
    // are received.
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[getDerivedStateFromProps]');
        console.log('  Next props:', nextProps);
        console.log('  Prev state:', prevState);
        return null;
    }

    // Called after initial render is done
    componentDidMount(){
        console.log('[componentDidMount]', 'Mounted.');
    }

     // Called before each render. Return false to prevent rendering.
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[shouldComponentUpdate]', 'Deciding to update');
        return true;
    }

    // Called after render() but before updating the DOM
    // A good time to make calculations based on old DOM nodes.
    // The value returned here is passed into componentDidUpdate
    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('[getSnapshotBeforeUpdate]', 'About to update...');
        return `Time is ${Date.now()}`;
    }

    // this will be called once the component gets updated
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[componentDidUpdate]', 'Updated.');
        console.log('  snapshot:', snapshot);
    }

    // this method will be called when componet is getting unmounted
    componentWillUnmount() {
        console.log('[componentWillUnmount]', 'Goodbye cruel world.');
    }

    handleClick = (event) => {
        console.log('[handleClick]', 'Updating state...')
        this.setState({
           counter: this.state.counter + 1 
        })
    }

    throwSomeError= () => {
        console.log('[throwSomeError]', 'Throwing an error...')
        this.setState({
            causeError: true
        });
        
    }

    render(){
        console.log('[render]', 'Rendered');

        if(this.state.causeError) {
            throw new Error('oh no!!');
        }

        return (
            <div style={{padding: "20px", fontSize: "14px"}}>
                <p>Value of counter is {this.state.counter} </p>

                <button onClick={this.handleClick}>
                    Update Counter
                </button>

                <br /><br />
                
                <button onClick={this.throwSomeError}>
                    Throw Error
                </button>
            </div>
        )
    }

}

export  default LifecycleDemo;