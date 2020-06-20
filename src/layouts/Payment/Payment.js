import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Navbar, Collapse, Nav, NavItem, NavLink } from "reactstrap";

import logo from "assets/img/janus_white_small.png";
import PaymentPlanFree from "./PaymentPlanFree";
import PaymentPlanPro from "./PaymentPlanPro";
import PaymentPlanEnterprise from "./PaymentPlanEnterprise";

export default (props) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(transparent, rgba(225, 78, 202, .7))",
        justifyContent: "center",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <Row>
        <Navbar expand="md" style={{ background: "transparent" }}>
          <Collapse isOpen={true} navbar>
            <div style={{ marginLeft: 15, marginTop: 15, minWidth: 60 }}>
              <Link to={{ pathname: "/" }}>
                <img
                  alt=""
                  src={logo}
                  height="60"
                  style={{ marginBottom: 20 }}
                />
              </Link>
            </div>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  target="_blank"
                  href="https://stackers.snazzydocs.com/docs/1.0/getting-started/whats-stackers-dot-io"
                >
                  Documentation
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pro">Pricing</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Row>
      <Row style={{ marginBottom: 50 }}>
        <Col lg="12">
          <div style={{ textAlign: "center" }}>
            <h1>Stackers goes Pro!</h1>
            <p>
              Whether you want to build & deploy hobby applications, open source
              projects, or critical & high scalability Enterprise apps,
              Stackers.io got you covered!
            </p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <PaymentPlanFree history={props.history} />
        <PaymentPlanPro history={props.history} />
        <PaymentPlanEnterprise />
      </Row>
    </div>
  );
};
