import React from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const userType = "User";

const putSettings = (payload) => {
  const postURL = payload.type === userType ? "/creds" : "/organization";
  const data = {
    Name: payload.name,
    ThirdPartyAWS: payload.ThirdPartyAWS,
  };
  console.log(postURL, data);

  if (
    !payload.ThirdPartyAWS ||
    !payload.ThirdPartyAWS.accessKey ||
    !payload.ThirdPartyAWS.secretKey ||
    !payload.ThirdPartyAWS.domain ||
    payload.ThirdPartyAWS.accessKey.match(/\*\*\*\*/) ||
    payload.ThirdPartyAWS.secretKey.match(/\*\*\*\*/)
  ) {
    console.error("nope!");
    return;
  }

  axios.post(
    process.env.REACT_APP_API_BASE_URL + postURL,
    {
      Name: payload.name,
      ThirdPartyAWS: payload.ThirdPartyAWS,
    },
    {
      withCredentials: true,
    }
  );
};

export default (props) => {
  const [thirdPartyMode, setThirdPartyMode] = React.useState(false);
  const [thirdPartyConfig, setThirdPartyConfig] = React.useState(props);

  const isAdmin =
    props.isAdmin ||
    (props.userMemberStatus && props.userMemberStatus === "admin");

  return (
    <>
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h3 className="title">Edit Account: {props.name}</h3>
              {!isAdmin && (
                <span className="small text-danger">
                  You are not authorized to change any of these settings!
                  <br />
                  Please contact the admin of this Github Organization.
                </span>
              )}
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-md-1" md="5">
                    <FormGroup>
                      <label>{props.type} (disabled)</label>
                      <Input
                        defaultValue={props.name}
                        disabled
                        placeholder="Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                {!props.ThirdPartyAWS && !thirdPartyMode ? (
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <h5 className="title">
                        There is no AWS account set up yet.
                      </h5>
                      <Button
                        disabled={!isAdmin}
                        className="btn-fill"
                        color="primary"
                        type="submit"
                        onClick={() => setThirdPartyMode(true)}
                      >
                        Setup AWS
                      </Button>
                    </Col>
                  </Row>
                ) : (
                  <>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <h5 className="title">AWS Account</h5>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Access Key</label>
                          <Input
                            disabled={!isAdmin}
                            defaultValue={
                              props.ThirdPartyAWS &&
                              props.ThirdPartyAWS.accessKey
                            }
                            placeholder="AKIATA9UO5WCOIKTCDLM"
                            type="text"
                            onChange={(e) =>
                              setThirdPartyConfig({
                                ...thirdPartyConfig,
                                ThirdPartyAWS: {
                                  ...thirdPartyConfig.ThirdPartyAWS,
                                  accessKey: e.target.value,
                                },
                              })
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Secret Key</label>
                          <Input
                            disabled={!isAdmin}
                            defaultValue={
                              props.ThirdPartyAWS &&
                              props.ThirdPartyAWS.secretKey
                            }
                            placeholder="ea9SSgeYehLatJ9CPa6x9cVlVghk123RGbDoTEwnj"
                            type="text"
                            onChange={(e) =>
                              setThirdPartyConfig({
                                ...thirdPartyConfig,
                                ThirdPartyAWS: {
                                  ...thirdPartyConfig.ThirdPartyAWS,
                                  secretKey: e.target.value,
                                },
                              })
                            }
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Domain</label>
                          <Input
                            disabled={!isAdmin}
                            defaultValue={
                              props.ThirdPartyAWS && props.ThirdPartyAWS.domain
                            }
                            placeholder="example.com"
                            type="text"
                            onChange={(e) =>
                              setThirdPartyConfig({
                                ...thirdPartyConfig,
                                ThirdPartyAWS: {
                                  ...thirdPartyConfig.ThirdPartyAWS,
                                  domain: e.target.value,
                                },
                              })
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Certificate ARN (disabled)</label>
                          <Input
                            defaultValue={
                              props.ThirdPartyAWS &&
                              props.ThirdPartyAWS.lambdaARN
                            }
                            disabled
                            placeholder="will be filled automatically..."
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>LambdaARN (disabled)</label>
                          <Input
                            defaultValue={
                              props.ThirdPartyAWS &&
                              props.ThirdPartyAWS.lambdaARN
                            }
                            disabled
                            placeholder="will be filled automatically..."
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </>
                )}
              </Form>
            </CardBody>
            <CardFooter>
              <Button
                className="btn-fill"
                color="primary"
                type="submit"
                onClick={() => putSettings(thirdPartyConfig)}
              >
                Save
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  );
};
