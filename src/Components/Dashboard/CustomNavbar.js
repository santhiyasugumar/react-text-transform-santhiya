import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsArrowRightSquareFill } from "react-icons/bs";

function CustomNavbar({setUser}) {
  const onClickevent = event => {
    sessionStorage.setItem("userLoggedIn" , "");
    setUser('');
  }
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Text-Transformation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            
            <a onClick= {onClickevent}><BsArrowRightSquareFill/></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;