import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container, Navbar, Nav, NavDropdown,  } from 'react-bootstrap';

import Index from './Index';
import Projects from  '../hooks/Projects';

import ProjectDetail from './ProjectDetail';
import Contact from './Contact';
import About from './About';
import Newsletter from './Newsletter';
import NoMatch from './NoMatch';
import StateExample from '../hooks/StateExample';
import Todos from '../hooks/Todos';
import EffectHook from '../hooks/EffectHook';

function RouterApp(){
    return(
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">My React App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/newsletter">Newsletter</Nav.Link>
                        <NavDropdown title="Hooks" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/statehook">State Hook</NavDropdown.Item>
                            <NavDropdown.Item href="/todos">Todos</NavDropdown.Item>
                            <NavDropdown.Item href="/effecthook">Effect Hook</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container fluid>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/projects" exact component={Projects} /> 
                    <Route path="/projects/:alias" component={ProjectDetail} />           
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/newsletter" component={Newsletter} />
                    <Route path="/statehook" component={StateExample} />
                    <Route path="/todos" component={Todos} />
                    <Route path="/effecthook" component={EffectHook} />
                    <Route component={NoMatch} />
                </Switch>
            </Container>
            
        </Router>
    )
}

export default RouterApp;