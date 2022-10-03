import React from 'react'
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <div id='navbar'>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/projects'>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/about'>About</Nav.Link>
        </Nav.Item>
      </Nav>
      <hr className='line'></hr>
    </div>
  )
}
