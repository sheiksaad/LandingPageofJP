import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/JWP Images/j3.png';
import './Navbar.modules.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          <img
            src={Logo}
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#link" className="nav-link-custom">About us</Nav.Link>
            <NavDropdown title="Trainings" id="basic-nav-dropdown" className='nav-dropdown'>
              <NavDropdown.Item href="#action/3.1" className='items'>Web and Mobile App Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='items'>Flutter Application Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='items'>Graphic Design and Video Editing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className='items'>Digital and Social Media Marketing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" className='items'>Blockchain Development</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="nav-link-custom">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
