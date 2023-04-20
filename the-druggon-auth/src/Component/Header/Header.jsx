import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import moment from 'moment';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";
import { Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
   <Container>
            <div className=' text-center'>
         
                
<img src={logo} alt="logo" />
<p>Journalism Without Fear or Favour</p>
<div>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
</div>

<div className='d-flex'>
<Button variant="danger">Latest</Button>
<Marquee speed={20}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
</div>
{/* Navbar */}


    <Navbar collapseOnSelect expand="lg" bg="light" variant="light"className='my-2'>
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Career">Career</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link  href="#memes">
            <Button variant="secondary">Login</Button>            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</Container>        
  
    );
};

export default Header;