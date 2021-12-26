import React from 'react';
import { useEthers } from '@usedapp/core';
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

  const submitHandler = (...args: any) => {
    console.log('submitHandler', args);
  };

  console.log(errors);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(submitHandler)}>
      <h1>hi4</h1>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        placeholder="First name"
        {...register('firstName', { required: true })}
      />
      <input
        placeholder="Last name"
        {...register('lastName', { required: true })}
      />
      <input placeholder="Email" {...register('email', { required: true })} />

      {/*/!* include validation with required or other standard HTML validation rules *!/*/}
      {/*<input {...register("exampleRequired", { required: true })} />*/}
      {/*/!* errors will return when field validation fails  *!/*/}
      {/*{errors.exampleRequired && <span>This field is required</span>}*/}
      <input type="submit" />
    </form>
  );
};

const Create = () => {
  const { mintToken, state } = usePIT();
  console.log(state);
  return (
    <ContentBlock>
      <ContentRow>
        {state.status === 'None' && <MintTokenForm onSubmit={mintToken} />}
        {state.status === 'Mining' && <h1>Waiting</h1>}
        {state.status === 'Success' && <h1>Done!</h1>}
      </ContentRow>
    </ContentBlock>
  );
};

export function Balance() {
  const { account, chainId, library, active, error } = useEthers();

  console.log({
    chainId,
    library,
    active,
    error,
    account,
  });

  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>Create My Identity</Title>
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
}
