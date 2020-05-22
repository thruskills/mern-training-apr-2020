import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';

const Projects = () =>{
    // define the state
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3030/projects')
        .then(res => res.json())
        .then(
            (result) => {
                setLoaded(true);
                setProjects(result);
            },
            (error) => {
                setLoaded(true);
                setError(error);
            }
        )
    }, []); // side effect - is getting into infinite loop :)

    if(error){
        return <div>Error : {error.message}</div>
    }else if(!loaded){
        return <div>Loading...</div>
    }else{
        return(
            <div>
                <h1>List of projects using hooks</h1>
                <Row>
                    {
                        projects.map(project => (
                            <Col md={6} lg={6} xs={12} key={project._id}>
                                <a href={`/projects/${project.alias}`}>
                                    <h3>{project.name}</h3>
                                    <img src={project.coverImage} style={{width: '100%'}} alt={project.name} />
                                </a>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        )
    }
}

export default Projects;

// images, videos.... 
// CDN (Content Delivery Network) -> source (storage - S3) we dump these images to s3 (bucket)
// upload image (nodejs -> ? ) - local server, or s3
// font icons - fontawesome, lineicon .....
// favicon 