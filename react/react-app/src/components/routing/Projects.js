import React from 'react';
// we are going to create a statefull component
/*
    Not a Functional component
    Class based component
    We will use lifecycle methods to fetch the data from API's
*/
import {Row, Col} from 'react-bootstrap';

class Projects extends React.Component{
    // list of projects
    constructor(props){
        super(props);
        this.state = {
            projects: [],
            error: null,
            isLoaded: false
        }
    }

    // a hook to one of the lifecycle method
    componentDidMount(){
        fetch('http://localhost:3030/projects')
        .then(res => res.json())
        .then(
            (result) => {
                // set the state
                this.setState({
                    isLoaded: true,
                    projects: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render(){

        const {error, projects, isLoaded } = this.state;
        
        if(error){
            return <div>Error : {error.message} </div>
        }else if(!isLoaded){
            return <div>Loading...</div>
        }else{
            return (
                <div>
                    <h1>List of projects</h1>
                    <Row>
                    {
                        projects.map(project => (
                            <Col md={6} lg={6} xs={12} key={project._id}>
                                <a href={`/projects/${project.alias}`}>
                                    <h3>{project.name}</h3>
                                    <img src={project.coverImage} style={{width:'100%'}} alt={project.name} />
                                </a>
                            </Col>
                        ))
                    }
                    </Row>
                </div>
            )
        }
    }
}

export default Projects;