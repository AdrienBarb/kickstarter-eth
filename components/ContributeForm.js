import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Message } from "semantic-ui-react";
import { getCampaign } from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Link, Router } from "../routes";

const ContributeForm = ({ address }) => {
  const [contribution, setContribution] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const campaign = getCampaign(address);

    setLoading(true);
    setErrorMessage(false);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(contribution, "ether"),
      });
      Router.push(`campaings/${address}`);
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={onSubmit} error={errorMessage}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          label="ether"
          labelPosition="right"
          value={contribution}
          onChange={(event) => setContribution(event.target.value)}
        />
      </Form.Field>

      <Message
        error
        header="There was some errors with your submission"
        content={errorMessage}
      />
      <Button primary type="submit" loading={loading}>
        Create
      </Button>
    </Form>
  );
};

export default ContributeForm;
