import React from 'react';

class ErrorCatcher extends React.Component {
    state = { error: null }
  
    // used t catch the errors/exceptions
    componentDidCatch(error, info) {
        console.log('[componentDidCatch]', error);
        this.setState({ error: info.componentStack });
    }
  
     // Called after initial render is done
    componentDidMount(){
        console.log('[componentDidMount]', 'ErrorCatcher Mounted.');
    }

    render() {
        if(this.state.error) {
            // figure out why this is not printing
            return (
                <div>
                    An error occurred: {this.state.error}
                </div>
            )
        }else{
            return this.props.children;
        }
    }
}

export default ErrorCatcher;