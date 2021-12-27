import React from 'react';
import {
  Container,
  ContentBlock,
  ContentRow,
  MainContent,
  Section,
  SectionRow,
} from '../components/base/base';
import { Title } from '../typography/Title';

const UnsupportedChainPage = () => {
  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>Unsupported Chain</Title>
          </SectionRow>
          <ContentBlock>
            <ContentRow>
              <h3>Please switch to mainnet</h3>
            </ContentRow>
          </ContentBlock>
        </Section>
      </Container>
    </MainContent>
  );
};

export default UnsupportedChainPage;
