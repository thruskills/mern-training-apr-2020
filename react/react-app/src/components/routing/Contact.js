import React from "react";
import {Form, Button, Alert} from 'react-bootstrap';

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            isSubmitted: false,
            success: false
        }
    }

    changeHandler = (event) =>{
        const target = event.target;
        
        let newState = {};
        newState[target.id] = target.value;
        this.setState(newState);

        // event.target.value
        // this always gives you the value of the input element 
        // input box, text area, select, radio 
    }


    submitHandler = (event) =>{
        event.preventDefault();
        this.setState({
            isSubmitted: true
        });

        // make the AJAX/ fetch call to pass the data to API
        fetch('http://localhost:3030/contact', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(this.state), // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                    isSubmitted: false,
                    success: true
                });
            },
            (error) => {
                console.log(error)
            }
        );
    }

    render(){
        
        return (
            <div>
                <h1>Contact Me</h1>
                
                {   this.state.success? 
                        <Alert variant="success">Data saved successfully.</Alert> 
                        : 
                        null 
                }
                
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="name" 
                            placeholder="Enter your name" 
                            value={this.state.name} 
                            onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            value={this.state.email} 
                            onChange={this.changeHandler} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="message"  
                            value={this.state.message} 
                            onChange={this.changeHandler} />
                    </Form.Group>
                
                    <div>
                        <label>Pick your favorite flavor:</label>
                        <br />
                        <select multiple={true} value={['B', 'C']} onChange={this.changeHandler}>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>

                    <Button 
                        variant="primary" 
                        type="submit" 
                        disabled={this.state.isSubmitted ? 'disabled' : ''} >
                            
                        Submit
                    </Button>
                </Form>
        
            </div>
        )
    }
}
export default Contact;