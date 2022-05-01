import React from "react";
import { useEffect } from "react";

import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";

import factory from "../ethereum/factory";

const newcampaign = ({ campaigns }) => {
  console.log(campaigns);

  const items = campaigns.map((address) => {
    return {
      header: address,
      description: <a>View Campaign</a>,
      fluid: true,
    };
  });

  return (
    <Layout>
      <h1>Open campaings</h1>
      <Button
        content="Create campaign"
        icon="add circle"
        primary
        labelPosition="left"
        floated="right"
      />
      <Card.Group items={items} />
    </Layout>
  );
};

newcampaign.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns: campaigns };
};

export default newcampaign;
