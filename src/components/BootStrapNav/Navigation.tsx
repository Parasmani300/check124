import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Navigation() {
    return (
        <>
            <div className="container-fluid">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">The-Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/swap">Swap</Nav.Link>
                        <Nav.Link href="/find">Find</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/pool">Pool</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Profile
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar> 
            </div>   
        </>
    )
}
