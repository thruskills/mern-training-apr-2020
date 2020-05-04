import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Projects(){
    return (

        <Container>
            <h2>Projects</h2>
            <Row>
                <Col>
                    <p>Number Guessing Game</p>
                    <Link to="/projects/number-guessing-game">
                        <img className="card-img-top" src="https://www.mypofo.com/images/projects/number-guessing-game.png" style={{borderBottom:"1px solid #e9ecef"}} />
                    </Link>
                </Col>

                <Col>
                    <p>JS Console</p>
                    <a href="/projects/js-console">
                        <img className="card-img-top" src="https://www.mypofo.com/images/projects/js-console.png" style={{borderBottom:"1px solid #e9ecef"}} />
                    </a>
                </Col>

                <Col>
                    <p>Image Gallery</p>
                    <a href="/projects/image-gallery">
                        <img className="card-img-top" src="https://www.mypofo.com/images/projects/image-gallery.png" style={{borderBottom:"1px solid #e9ecef"}} />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}
export default Projects;