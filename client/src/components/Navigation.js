import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
      
      <Nav.Link as ={Link} to ='/products' >Products</Nav.Link>
      <Nav.Link as ={Link} to ='/addProduct'>New Product</Nav.Link>
      <Nav.Link as ={Link} to ='/updateProduct/:id'>Update</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
  
    </div>
  )
}

export default Navigation