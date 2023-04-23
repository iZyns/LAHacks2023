import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from '../pages/home';
import SignUp from '../pages/signup';
import Chat from '../pages/chat';

function NavigationBar() {
  // const [data, setData] = useState({});
  

  //     useEffect(() => {
  //       axios.get('http://localhost:8000/find-specific-subject')
  //         .then(response => {
  //         setData(response.data);
  //         console.log(data)
  //       })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //     }, []);

  return (
    <> 
      {/* Added light instead of dark */}
      <Navbar fixed="top" bg="light" variant="dark">
        <div style={{display: "flex", alignItems: "center", textDecorationColor: "white"}}>

          <Navbar.Brand href="/home" style={{marginRight: "auto", textDecoration: "none", color: "inherit"}}><h1>LA Hacks Project</h1></Navbar.Brand> &nbsp;
          <Nav className="me-auto">
            <Nav.Link href="/" style={{textDecoration: "none", color: "inherit"}}>Sign In/Sign Up</Nav.Link> &nbsp;
            <Nav.Link href="/chat/algebra" style={{textDecoration: "none", color: "inherit"}}>Temp Chat Room</Nav.Link>
          </Nav>

        </div> <hr />
      </Navbar>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/chat/algebra" element={<Chat />} />
      </Routes>
    </>
  );
}

export default NavigationBar;