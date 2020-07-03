import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

const Projects = () => {
  // define the state
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3030/v1/projects', {
      headers: { 'x-api-key': 'abcd1234' },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setLoaded(true);
          setProjects(result.data);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []); // side effect - is getting into infinite loop :)

  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (!loaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>List of projects using hooks</h1>
        <Row>
          {projects.map((project) => (
            <Col md={6} lg={6} xs={12} key={project._id}>
              <a href={`/projects/${project.slug}`}>
                <h3>{project.name}</h3>
                <img
                  src={`http://localhost:3030/v1/projects/${project.slug}/photo`}
                  style={{ width: '100%' }}
                  alt={project.name}
                />
              </a>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
};

export default Projects;

// images, videos....
// CDN (Content Delivery Network) -> source (storage - S3) we dump these images to s3 (bucket)
// upload image (nodejs -> ? ) - local server, or s3
// font icons - fontawesome, lineicon .....
// favicon
