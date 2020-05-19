/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import Modal from "react-modal";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import JamList from "../components/JamList/JamList";
import JamCreate from "../components/JamCreate/JamCreate";

// core components
import { chartExample1 } from "variables/charts.js";

Modal.setAppElement("#root");

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      showModal: false,
    };
  }
  setBgChartData = (name) => {
    this.setState({
      bigChartData: name,
    });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Total Requests</h5>
                      <CardTitle tag="h2">Visits</CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data1",
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData("data1")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            JAM #1
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data2",
                          })}
                          onClick={() => this.setBgChartData("data2")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            JAM #2
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data3",
                          })}
                          onClick={() => this.setBgChartData("data3")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            JAM #3
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample1[this.state.bigChartData]}
                      options={chartExample1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Existing JAM-Stacks</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-cloud-upload-94 text-info" />{" "}
                    Current Deployments
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <JamList />
                  <div className="float-left">
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
                        type="radio"
                        onClick={this.toggleModal}
                      />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Add JAM Stack
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-single-02" />
                      </span>
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            {/* <Col lg="6">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Daily Sales</h5>
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
            </Col> */}
          </Row>
          <Modal
            style={{
              overlay: { zIndex: "2" },
              content: { height: "500px", background: "transparent" },
            }}
            onRequestClose={this.toggleModal}
            isOpen={this.state.showModal}
          >
            <JamCreate onClose={this.toggleModal} />
          </Modal>
        </div>
      </>
    );
  }
}

export default Dashboard;
