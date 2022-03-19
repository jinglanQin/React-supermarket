import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap"
import React from 'react';

function navbarView() {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <LinkContainer to="/">
           <Navbar.Brand>Shopping Guid Application</Navbar.Brand>
           </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/staff" >
                            <Nav.Link>Staff</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/customer" >
                            <Nav.Link>Customer</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default navbarView;