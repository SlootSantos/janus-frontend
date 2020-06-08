import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import { AuthContext } from "../../context/Auth.js";
import logo from "assets/img/janus_white.png";

const Login = (props) => {
  const { authenticated } = React.useContext(AuthContext);

  if (authenticated) {
    props.history.push("/admin/dashboard");
    return null;
  }

  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Login</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col
                lg="12"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt=""
                  src={logo}
                  height="120"
                  style={{ marginBottom: 20 }}
                />
                <p className="text-primary">
                  To use <b>Janus</b>, you have to login and authorize Github.
                  Janus will then fetch your repositories and install webhooks
                  to them
                  <br />
                  <br /> All you have to do is login once,
                  <br /> Janus will take of the rest...
                </p>
                <div className="float-left" style={{ marginTop: "15px" }}>
                  <Button
                    tag="label"
                    className="btn-fill"
                    color="primary"
                    type="submit"
                    id="0"
                    size="lg"
                  >
                    <input
                      defaultChecked
                      className="d-none"
                      name="options"
                      type="submit"
                      onClick={() =>
                        window.location.replace(
                          process.env.REACT_APP_API_BASE_URL + "/login"
                        )
                      }
                    />
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      Authorize Github
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-single-02" />
                    </span>
                  </Button>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
