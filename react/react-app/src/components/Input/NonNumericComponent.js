import React from 'react';

class NonNumericComponent extends React.Component {
    state = {
        text: 'MERN'
    }
    handleChange = (event) => {
        // check if user has entered a numeric value ..
        // remove the remoric value
        // go for state updation
        let txt = event.target.value;
        txt = txt.replace(/[0-9]/g, '');

        this.setState({
            text: txt
        })
    }

    render(){
        return <input type="text" value={this.state.text} onChange={this.handleChange} />
    }
}

export default NonNumericComponent;