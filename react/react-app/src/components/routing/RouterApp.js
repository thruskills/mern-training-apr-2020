import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import Index from './Index';
import Topics from './Topics';
import Contact from './Contact';
import NoMatch from './NoMatch';

function RouterApp(){
    return(
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/topics">Topics</Link>
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
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/topics" component={Topics} />                
                    <Route path="/contact" component={Contact} />
                    <Route component={NoMatch} />
                </Switch>
            </Container>
            
        </Router>
    )
}

export default RouterApp;