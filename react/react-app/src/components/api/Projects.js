import React from 'react';
// we are going to create a statefull component
/*
    Not a Functional component
    Class based component
    We will use lifecycle methods to fetch the data from API's
*/

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
                console.log(result)
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
        
        const projectCss = {
            margin: '10px',
            width: '32%',
            minHeight: '300px',
            float: 'left',
            border: '1px solid #ccc',
            padding: '10px'
        };

        if(error){
            return <div>Error : {error.message} </div>
        }else if(!isLoaded){
            return <div>Loading...</div>
        }else{
            return (
                <div>
                    <h1>List of projects</h1>
                    
                    {
                        projects.map(project => (
                            <div style={projectCss} >
                                <a href={`/projects/${project._id}`}>
                                    <h3>{project.name}</h3>
                                    <img src={project.coverImage} style={{width:'100%'}} />
                                </a>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}

export default Projects;