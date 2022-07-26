import React from "react"
import { Navbar,Container, Nav, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { auth } from "../service/firebase"
// import { LinkContainer } from "react-router-bootstrap"
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
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
          }
          
          {user && 

              <Nav.Link href="#" disabled>
                {user.displayName}
              </Nav.Link>
            
          }
          {user && 
            <div className="d-flex">
              <Button varaint="secondaary" className="button signout" onClick={() => auth.signOut()}>Sign out</Button>
                  {/* <Nav.Link as={Link} to="/logout">Logout</Nav.Link> */}
            </div>
          }
          
          </Nav>
        </Container>
      </Navbar>
      </>
    )


}