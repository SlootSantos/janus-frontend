import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";

// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// core components
import { chartExample1, chartExample3 } from "variables/charts.js";
import logo from "assets/img/janus_white.png";

const LandingPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(transparent, rgba(225, 78, 202, .7))",
        // display: "flex",
        justifyContent: "center",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <Row>
        <div style={{ marginLeft: 15, marginTop: 15 }}>
          <Link to={{ pathname: "/" }}>
            <img src={logo} height="60" style={{ marginBottom: 20 }} />
          </Link>
        </div>
      </Row>
      <Row style={{ marginBottom: 50 }}>
        <Col lg="12">
          <div style={{ textAlign: "center" }}>
            <h1>Stackers.io</h1>
            <h5>Zero Config JAM-Stack Deployment</h5>
            <h2>Never worry about your Frontend deployments ever again</h2>
          </div>
          <div
            style={{
              marginTop: "15px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to={{ pathname: "/login" }}>
              <Button
                tag="label"
                className="btn-fill"
                color="primary"
                type="submit"
                id="0"
                size="lg"
              >
                {/* <input
                defaultChecked
                className="d-none"
                name="options"
                type="submit"
                onClick={() =>
                  window.location.replace(
                    process.env.REACT_APP_API_BASE_URL + "/login"
                  )
                }
              /> */}
                <span className=" d-sm-block d-md-block d-lg-block d-xl-block">
                  Get Started
                </span>
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <Card>
            <CardHeader>
              <h5 className="card-category">100%</h5>
              <CardTitle tag="h2">Zero Config. Zero Knowledge</CardTitle>
            </CardHeader>
            <CardBody>
              <ul>
                <li>
                  <span className="text-primary">Best Practices</span> out of
                  the box
                </li>
                <li>
                  Literally{" "}
                  <span className="text-primary">every JS framework</span>{" "}
                  supported
                </li>
                <li>
                  <span className="text-primary">Custom config</span> if you
                  need it
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <CardHeader>
              <h5 className="card-category">Effortless</h5>
              <CardTitle tag="h2">Scalability & Reliability</CardTitle>
            </CardHeader>
            <CardBody>
              <ul>
                <li>
                  deployed to <span className="text-primary">AWS</span>
                </li>
                <li>
                  <span className="text-primary">S3</span> as storage for your
                  sources
                </li>
                <li>
                  <span className="text-primary">Cloudfront</span> as high
                  availability CDN
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <CardHeader>
              <h5 className="card-category">Top Notch</h5>
              <CardTitle tag="h2">Security</CardTitle>
            </CardHeader>
            <CardBody>
              <ul>
                <li>
                  buckets are private at{" "}
                  <span className="text-primary">all times</span>
                </li>
                <li>
                  files only accessible through{" "}
                  <span className="text-primary">CDN</span>
                </li>
                <li>
                  <span className="text-primary">HTTPS</span> by default
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={{ size: 6, offset: 3 }}>
          <div className="text-center" style={{ marginBottom: 30 }}>
            <h2>Why?</h2>
            <p>
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
              <br />
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="6">
          <Card className="card-chart">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <h5 className="card-category">Total Janus Deployments</h5>
                  <CardTitle tag="h2">JAM Stacks</CardTitle>
                </Col>
                <Col sm="6">
                  <div className="btn-group-toggle float-right">
                    2020-05-01 18:54
                  </div>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line
                  data={chartExample1["data1"]}
                  options={chartExample1.options}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">Cost caused by Janus</h5>
              <CardTitle tag="h3">
                <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                3,500€
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Bar
                  data={chartExample3.data}
                  options={chartExample3.options}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
