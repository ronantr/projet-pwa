import React from "react"
import { Navbar,Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';

export default function AppHeader ({user}) {
  
    return (
        <>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#">PWA</Navbar.Brand>
          <Nav className="me-auto">
          {!user && 
            <LinkContainer to="/login" >
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          }
          
          {user && 

              <Nav.Link href="#" disabled>
                {user.displayName}
              </Nav.Link>
            
          }
          {user && 
            <div className="d-flex">
                <LinkContainer to="/logout" >
                  <Nav.Link>Logout</Nav.Link>
                </LinkContainer>
            </div>
          }
          
          </Nav>
        </Container>
      </Navbar>
      </>
    )


}