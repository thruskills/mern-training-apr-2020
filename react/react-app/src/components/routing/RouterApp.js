import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

import Index from './Index';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
import Contact from './Contact';

function RouterApp(){
    return(
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>

            <Container>
                <Route path="/" exact component={Index} />
                <Route path="/projects"  component={Projects} />
                <Route path="/projects/:slug" component={ProjectDetail} />
                <Route path="/contact" component={Contact} />
            </Container>
            
        </Router>
    )
}

export default RouterApp;