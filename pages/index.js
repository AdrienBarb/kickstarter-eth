import React from "react";
import { useEffect } from "react";

import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";

import factory from "../ethereum/factory";
import {Link, Router} from '../routes'

const newcampaign = ({ campaigns }) => {
  console.log(campaigns);

  const items = campaigns.map((address) => {
    return {
      header: address,
      description: (
        <Link route={`campaigns/${address}`}>
          <a>View Campaign</a>
        </Link>
      ),
      fluid: true,
    };
  });

  return (
    <Layout>
      <h1>Open campaings</h1>
      <Link route="/campaigns/new">
        <Button
          content="Create campaign"
          icon="add circle"
          primary
          labelPosition="left"
          floated="right"
        />
      </Link>
      <Card.Group items={items} />
    </Layout>
  );
};

newcampaign.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns: campaigns };
};

export default newcampaign;
