import React from 'react';
import { formatEther } from '@ethersproject/units';
import { useEtherBalance, useEthers } from '@usedapp/core';
import {
  Container,
  ContentBlock,
  ContentRow,
  MainContent,
  Section,
  SectionRow,
} from '../components/base/base';
import { Title } from '../typography/Title';
import { usePIT } from '../components/PersonalIdentityToken/PersonalIdentityToken';
import { useForm } from 'react-hook-form';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import { Contract, useMyTokenBalance } from '../data/contracts';

interface MintTokenFormProps {
  onSubmit: (firstName: string, lastName: string, email: string) => void;
}

const MintTokenForm = ({ onSubmit }: MintTokenFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = (formValue: any) => {
    console.log('submitHandler', formValue);
  };

  return (
    <Form onSubmit={(e) => submitHandler(e.value)}>
      <FormField name="firstName" htmlFor="firstName-id" label="First Name">
        <TextInput id="firstName-id" name="firstName" />
      </FormField>
      <FormField name="lastName" htmlFor="lastName-id" label="Last Name">
        <TextInput id="lastName-id" name="lastName" />
      </FormField>
      <FormField name="email" htmlFor="email-id" label="Email">
        <TextInput id="email-id" name="email" />
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
      </Box>
    </Form>
  );
};

const Create = () => {
  const { mintToken, state } = usePIT();
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const linkBalance = useMyTokenBalance(Contract.Chainlink);
  return (
    <>
      <ContentBlock>
        <ContentRow>
          {etherBalance && <div>ETH balance: {formatEther(etherBalance)}</div>}
        </ContentRow>
        <ContentRow>
          {linkBalance && <div>LINK balance: {formatEther(linkBalance)}</div>}
        </ContentRow>
      </ContentBlock>
      <ContentBlock>
        <ContentRow>
          {state.status === 'None' && <MintTokenForm onSubmit={mintToken} />}
          {state.status === 'Mining' && <h1>Waiting</h1>}
          {state.status === 'Success' && <h1>Done!</h1>}
        </ContentRow>
      </ContentBlock>
    </>
  );
};

const IdentityPage = () => {
  const { account } = useEthers();

  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>Create Identity Token</Title>
          </SectionRow>
          {account && <Create />}
          {!account && (
            <ContentBlock>
              <ContentRow>
                <h3>Connect your wallet to start</h3>
              </ContentRow>
            </ContentBlock>
          )}
        </Section>
      </Container>
    </MainContent>
  );
};

export default IdentityPage;
