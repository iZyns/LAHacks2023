import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';
import SignUp from '../pages/signup';
import Chat from '../pages/chat';

function NavigationBar() {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <div style={{display: "flex", alignItems: "center"}}>
          <Navbar.Brand href="/home" style={{marginRight: "auto"}}><h1>LA Hacks Project</h1></Navbar.Brand> &nbsp;
          <Nav className="me-auto">
            <Nav.Link href="/">Login</Nav.Link> &nbsp;
            <Nav.Link href="/signup">Sign Up</Nav.Link> &nbsp;
            <Nav.Link href="/chat/algebra">Temp Chat Room</Nav.Link>
          </Nav>
        </div> <hr />
      </Navbar>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat/algebra" element={<Chat />} />
      </Routes>
    </>
  );
}

export default NavigationBar;