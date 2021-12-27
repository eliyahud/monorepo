import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Page } from './components/base/base';
import { TopBar } from './components/TopBar';
import { GlobalStyle } from './global/GlobalStyle';
import { NotificationsList } from './components/Transactions/History';
import IdentityPage from './pages/IdentityPage';
import { useChain } from './data/contracts';
import UnsupportedChainPage from './pages/UnsupportedChainPage';

export function App() {
  const chain = useChain();
  return (
    <Page>
      <GlobalStyle />
      <BrowserRouter>
        <TopBar />
        {chain ? (
          <Switch>
            <Route exact path="/identity" component={IdentityPage} />
            <Redirect exact from="/" to="/identity" />
          </Switch>
        ) : (
          <UnsupportedChainPage />
        )}
      </BrowserRouter>
      <NotificationsList />
    </Page>
  );
}
