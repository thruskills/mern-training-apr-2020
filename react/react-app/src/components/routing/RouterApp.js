import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import Index from './Index';
import Projects from  './Projects';
import ProjectDetail from './ProjectDetail';
import Contact from './Contact';
import About from './About';
import Newsletter from './Newsletter';
import NoMatch from './NoMatch';
import StateExample from '../hooks/StateExample';

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

                    <li>
                        <Link to="/newsletter">Newsletter</Link>
                    </li>

                    <li>
                        <Link to="/statehook">State Hook</Link>
                    </li>
                </ul>
            </nav>
        
            <Container>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/projects" exact component={Projects} /> 
                    <Route path="/projects/:alias" component={ProjectDetail} />           
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/newsletter" component={Newsletter} />
                    <Route path="/statehook" component={StateExample} />
                    <Route component={NoMatch} />
                </Switch>
            </Container>
            
        </Router>
    )
}

export default RouterApp;