import React from 'react';

class ControllerInput extends React.Component {
    state = {
        text: 'MERN'
    }
    handleChange = (event) => {
        console.log(event.target)
        this.setState({
            text: event.target.value
        })
    }

    render(){
        return <input type="text" value={this.state.text} onChange={this.handleChange} />
    }
}

export default ControllerInput;