import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/register");
  }
 
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Navbar.Brand href="#home">MENU</Navbar.Brand>
        <Nav className="me-auto navbar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/" className="me-2" style={{ color: "white" }}>
                Product List
              </Link>
              <Link to="/add" className="me-2" style={{ color: "white" }}>
                {" "}
                Add Product{" "}
              </Link>
              <Link to="/update" className="me-2" style={{ color: "white" }}>
                {" "}
                Update Product{" "}
              </Link>
              <Link to="/search" className="me-2" style={{ color: "white" }}>
                {" "}
                Search Product{" "}
              </Link>
              <Link to="/search" className="me-2" style={{ color: "white" }}>
                {" "}
               Ayrıntılar{" "}
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="me-2">
                {" "}
                Login{" "}
              </Link>
              <Link to="/register" className="me-2">
                {" "}
                Register Product{" "}
              </Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("user-info") ? (
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logOut}> Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </Navbar>
    </div>
  );
}

export default Header;
