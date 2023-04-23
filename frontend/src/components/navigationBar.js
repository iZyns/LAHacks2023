import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <> 
      <Navbar fixed="top" bg="dark" variant="dark">
        <div style={{display: "flex", alignItems: "center", textDecorationColor: "white"}}>

          <Navbar.Brand href="/home" style={{marginRight: "auto", textDecoration: "none", color: "white"}}><h1>LA Hacks Project</h1></Navbar.Brand> &nbsp;

        </div> <hr />
      </Navbar>
    </>
  );
}

export default NavigationBar;