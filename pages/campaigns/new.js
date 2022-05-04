import React, {useState} from "react";
import Layout from "../../components/Layout";
import { Button, Checkbox, Form, Input, Message } from "semantic-ui-react";
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import {Link, Router} from '../../routes'

const newCampaign = () => {

  const [minimumContribution, setMinimumContribution] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)


  const onSubmit = async (event) => { 
    event.preventDefault()
    setLoading(true)
    setErrorMessage(false)
    try {
      const accounts = await web3.eth.getAccounts()
      await factory.methods.createCampaign(minimumContribution).send({from: accounts[0]})
      Router.push('/')
    } catch (err) {
      setErrorMessage(err.message)
    }
    setLoading(false)
  }
    
  return (
    <Layout>
        <Form onSubmit={onSubmit} error={errorMessage}>
        <Form.Field>
            <label>Minimum contribution</label>
            <Input label='Wei' labelPosition="right" value={minimumContribution} onChange={event => setMinimumContribution(event.target.value)} />
        </Form.Field>

        <Message
          error
          header='There was some errors with your submission'
          content={errorMessage}
        />
        <Button primary type="submit" loading={loading}>Create</Button>
        </Form>
    </Layout>
  );
};

export default newCampaign;
