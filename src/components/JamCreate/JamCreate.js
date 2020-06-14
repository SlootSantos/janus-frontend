import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Input,
  Row,
  Col,
  Label,
} from "reactstrap";

import { StackContext } from "../../context/Stack";

const createStack = async (repoName, customSubdomain, updateFn, cb) => {
  try {
    const { data } = await axios.post(
      process.env.REACT_APP_API_BASE_URL + "/jam",
      {
        Repository: repoName,
        CustomSubdomain: customSubdomain,
      },
      {
        withCredentials: true,
      }
    );

    updateFn(data);
    cb();
  } catch (error) {}
};

const JamCreate = (props) => {
  const { setStacks } = React.useContext(StackContext);

  const [repos, setRepos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [selectedRepo, setSelectedRepo] = React.useState("");
  const [customSubdomain, setCustomSubDomain] = React.useState("");

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_API_BASE_URL + "/repo",
        {
          withCredentials: true,
        }
      );
      setRepos(data);
    })();
  }, []);

  return (
    <Card>
      <CardHeader>
        <h5 className="card-category">new JAM-Stack</h5>
        <CardTitle tag="h3">
          <i className="tim-icons icon-cloud-upload-94 text-info" /> Create
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col lg="12">
            <p className="text-primary">
              <u>Repository </u>
              <small>*required</small>
            </p>
            <small className="text-primary">
              Choose the one Github repository that you want to create a new
              JAM-Stack for.
            </small>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              onChange={(e) => setSelectedRepo(e.target.value)}
              // onKeyDown={() =>
              //   createStack(selectedRepo, setStacks, props.onClose)
              // }
            >
              <option>Select Repository</option>
              {repos.map((r, idx) => (
                <option value={r} key={idx}>
                  {r}
                </option>
              ))}
            </Input>
            <div style={{ marginTop: 15 }}>
              <p className="text-primary">
                <u>Subdomain</u> <small>*optional</small>
              </p>
              <small className="text-primary">
                If you don't choose a subdomain, Stackers will assign a random
                hash as subdomain.
              </small>
              <Input
                type="text"
                name="customSubDomain"
                id="customSubDomain"
                onChange={(e) => setCustomSubDomain(e.target.value)}
                value={customSubdomain}
                placeholder="myexample"
              />
            </div>
            <div style={{ marginTop: 15 }}>
              <p className="text-primary">
                <u>Deploy to your own AWS infrastructure</u>
              </p>
              <small className="text-primary">
                If you want the JAM-Stack infrastructure deployed to your own
                AWS account, select your own infrastructure.
                <br />
                Stackers.io will still handle everything for you. You won't have
                to worry about anything
              </small>
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                onChange={(e) => setSelectedRepo(e.target.value)}
                // onKeyDown={() =>
                //   createStack(selectedRepo, setStacks, props.onClose)
                // }
              >
                <option>Use Stackers.io Infrastructre</option>
                <option value={true}>Use my own AWS infrastructre</option>
              </Input>
            </div>
            <div className="float-left" style={{ marginTop: "15px" }}>
              <Button
                tag="label"
                className="btn-fill"
                color="primary"
                type="submit"
                id="0"
                size="lg"
                style={{ display: "flex", alignItems: "center" }}
                disabled={loading || !selectedRepo}
              >
                <input
                  defaultChecked
                  className="d-none"
                  name="options"
                  type="submit"
                  onClick={() => {
                    setLoading(true);
                    createStack(
                      selectedRepo,
                      customSubdomain,
                      setStacks,
                      props.onClose
                    );
                  }}
                />
                {loading && (
                  <Loader
                    type="Puff"
                    color="white"
                    height={20}
                    width={20}
                    style={{ marginRight: "5px" }}
                  />
                )}
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Create JAM Stack
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
  );
};

export default JamCreate;
