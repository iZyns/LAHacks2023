import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <> 
      <Navbar fixed="top" bg="light" variant="dark">
        <div style={{display: "flex", alignItems: "center", textDecorationColor: "white"}}>

          <Navbar.Brand href="/home" style={{marginRight: "auto", textDecoration: "none", color: "inherit"}}><h1>LA Hacks Project</h1></Navbar.Brand> &nbsp;
          <Nav className="me-auto">
            <Nav.Link href="/groups" style={{textDecoration: "none", color: "inherit"}}>Temp Chat Room</Nav.Link>
          </Nav>

        </div> <hr />
      </Navbar>
    </>
  );
}

export default NavigationBar;