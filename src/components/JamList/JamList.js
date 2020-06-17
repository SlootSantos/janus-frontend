import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { StackContext } from "../../context/Stack";

import hdd from "assets/img/hdd_white.png";

const deleteStack = async (stack, cb) => {
  try {
    const { data } = await axios.delete(
      process.env.REACT_APP_API_BASE_URL + "/jam",
      {
        withCredentials: true,
        data: {
          ID: stack.id,
          IsThirdParty: stack.isThirdParty,
          Repository: stack.Repo,
        },
      }
    );

    cb(data);
  } catch (error) {}
};

const JamList = () => {
  const { stacks, setStacks } = React.useContext(StackContext);

  if (!stacks.length)
    return <div style={{ padding: 20 }}>No Stacks yet...</div>;

  return (
    <Table className="tablesorter" responsive>
      <thead className="text-primary">
        <tr>
          <th>ID</th>
          <th>Git Repository</th>
          <th>Domain</th>
          <th>Last Build</th>
          <th>Destroy</th>
        </tr>
      </thead>
      <tbody>
        {stacks.map((stack, idx) => (
          <JamTableRow stack={stack} key={idx} updateStacks={setStacks} />
        ))}
      </tbody>
    </Table>
  );
};

export default JamList;

const JamTableRow = ({ stack, updateStacks }) => {
  const [loading, setLoading] = React.useState(false);

  if (!stack.id || !stack.CDN || !stack.CDN.domain) return null;

  return (
    <tr>
      <td>
        {stack.isThirdParty && (
          <img src={hdd} height="20" style={{ marginRight: 5 }} />
        )}
        {stack.id}
      </td>
      <td>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${stack.Repo.owner}/${stack.Repo.name}`}
        >
          {stack.Repo.name}
        </a>
      </td>
      <td>
        {stack.CDN.customdomain ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://${stack.CDN.customdomain}`}
          >
            {`${stack.CDN.customdomain}`}
          </a>
        ) : (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://${stack.CDN.subdomain}.stackers.io`}
          >
            {`${stack.CDN.subdomain}.stackers.io`}
          </a>
        )}
      </td>
      <td>
        {stack.Build && stack.Build.latest && (
          <Link to={`/build/${stack.Build.latest}`}>{stack.Build.latest}</Link>
        )}
      </td>
      <td>
        <Button
          id="0"
          size="sm"
          onClick={() => {
            setLoading(true);
            deleteStack(stack, updateStacks);
          }}
        >
          {loading ? (
            <Loader type="Puff" color="white" height={20} width={20} />
          ) : (
            <i className="tim-icons icon-simple-remove text-danger" />
          )}
        </Button>
      </td>
    </tr>
  );
};
