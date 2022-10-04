import React from 'react'
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <div id='navbar'>
      <Nav className="justify-content-end" id='link'>
        <Nav.Item>
          <Nav.Link href="/" className='text-success'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/projects' className='text-success'>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/about' className='text-success'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/other' className='text-success'>Other Stuff</Nav.Link>
        </Nav.Item>
      </Nav>
      <hr className='line'></hr>
    </div>
  )
}
