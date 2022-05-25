import React from "react";
import { Button } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import { Link } from "../../../routes";

const requests = ({ address }) => {
  return (
    <Layout>
      <div>hello</div>
      <Link route={`/campaigns/${address}/requests/new`}>
        <a>
          <Button primary>Add request</Button>
        </a>
      </Link>
    </Layout>
  );
};

requests.getInitialProps = async (props) => {
  const address = props.query.address;

  return { address: address };
};

export default requests;
