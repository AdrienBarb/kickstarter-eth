import React from "react";
import { Button, Card, Grid } from "semantic-ui-react";
import ContributeForm from "../../components/ContributeForm";
import Layout from "../../components/Layout";
import { getCampaign } from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";

const address = ({
  minimumContribution,
  balance,
  requestCount,
  approversCount,
  manager,
  address,
}) => {
  const items = [
    {
      header: manager,
      meta: "Address of Manager",
      description:
        "The manager created this campaign and can create request to withdraw money",
      style: { overflowWrap: "break-word" },
    },
    {
      header: minimumContribution,
      meta: "Minimum (Wei)",
      description:
        "The manager created this campaign and can create request to withdraw money",
      style: { overflowWrap: "break-word" },
    },
    {
      header: web3.utils.fromWei(balance, "ether"),
      meta: "Current Balance",
      description:
        "The manager created this campaign and can create request to withdraw money",
      style: { overflowWrap: "break-word" },
    },
    {
      header: requestCount,
      meta: "Numbers of requests",
      description:
        "The manager created this campaign and can create request to withdraw money",
      style: { overflowWrap: "break-word" },
    },
    {
      header: approversCount,
      meta: "Numbers of approvers",
      description:
        "The manager created this campaign and can create request to withdraw money",
      style: { overflowWrap: "break-word" },
    },
  ];

  return (
    <Layout>
      <Grid columns={2} padded>
        <Grid.Row>
          <Grid.Column>
            <Card.Group items={items} />
          </Grid.Column>
          <Grid.Column>
            <ContributeForm address={address} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Link route={`/campaigns/${address}/requests`}>
            <a>
              <Button primary>View request</Button>
            </a>
          </Link>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

address.getInitialProps = async (props) => {
  const address = props.query.address;
  const campaign = getCampaign(address);
  const summary = await campaign.methods.getSummary().call();

  return {
    minimumContribution: summary[0],
    balance: summary[1],
    requestCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
    address: address,
  };
};

export default address;
