import React from 'react';

class UnControllerInput extends React.Component{

    // this way of defining method will not work 
    showValue = () => {
        // this will point to function's scope
        // whereas the input is defined in the componet scope i.e. UnCoontrolledInput
        console.log('reading values...')
        console.log(this.input.value);

    }

    render(){
        return (
            <>
                <input text="text" id="uc" ref={input => this.input = input } defaultValue="Abcd" />
                <button onClick={this.showValue}>Show Value</button>
            </>
        )
    }
}

export default  UnControllerInput;