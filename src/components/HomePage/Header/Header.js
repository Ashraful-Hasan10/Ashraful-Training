import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Header.css';
const Header = ({ renderHeader }) => {

  const headerContent = (
    <Row className="row-cols-1 row-cols-md-2 mt-5">
      <Col className="header-content pb-4 order-last order-md-first">
        <h1>Advanced Fitness Studio in The Country</h1>
        <h6> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sequi mollitia accusantium est eveniet quia doloremque impedit, explicabo tempora dolorum, enim debitis praesentium aliquam modi tenetur provident similique numquam recusandae placeat quibusdam odio incidunt! Sed nisi ullam officiis iusto laboriosam distinctio voluptas quidem dolore, eligendi natus ea amet quo exercitationem. </h6>
        <br />
        <span
          style={{ color: "#FCD842", fontWeight: 700 }}
        >
          Directed By
          </span> <br />
        <h3> <span style={{ color: "white" }}>ASHRAFUL</span> <span style={{ color: "#FCD842" }}>HASAN</span></h3>
        {/* <button>join us</button> */}
      </Col>
      <Col className="pb-4  order-first order-md-last">
        <iframe
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/PaFyZn4W_VQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Col>
    </Row>
  )

  let header;
  if (renderHeader.showHeader === "home") {
    header = headerContent;
  } else if (renderHeader.showHeader === "class") {
    header = (
      <div className="header-container">
        <h1 className="header-title">{renderHeader.text}</h1>
      </div>
    );
  } else if (renderHeader.showHeader === "details") {
    header = (
      <div className="header-container">
        <h1 className="header-title">{renderHeader.text}</h1>
      </div>
    );
  }
  else if (renderHeader.showHeader === "price") {
    header = (
      <div className="header-container">
        <h1 className="header-title">{renderHeader.text}</h1>;
      </div>
    );
  } else if (renderHeader.showHeader === "memberShip") {
    header = (
      <div className="header-container">
        <h1 className="header-title">{renderHeader.text}</h1>
      </div>
    );
  } else {
    header = headerContent;
  }

  return (
    <div className="navBar-bg mb-5">
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          ASHRAFUL'S
          <span
            style={{ color: "#FCD842", marginLeft: "12px", fontWeight: 700 }}
          >
            CARE
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="header-link" to="/home">
              Home
            </NavLink>
            <NavLink className="header-link" to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink className="header-link" to="/admin">
              Admin
            </NavLink>
            <NavLink className="header-link" to="/login">
              LogIn
            </NavLink>
            <NavLink className="header-link" to="#contact">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>{header}</Container>
    </div>
  );
};

export default Header;
