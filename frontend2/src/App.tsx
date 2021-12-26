import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Page } from './components/base/base';
import { TopBar } from './components/TopBar';
import { GlobalStyle } from './global/GlobalStyle';
import { NotificationsList } from './components/Transactions/History';
import IdentityPage from './pages/IdentityPage';

export function App() {
  return (
    <Page>
      <GlobalStyle />
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path="/identity" component={IdentityPage} />
          <Redirect exact from="/" to="/identity" />
        </Switch>
      </BrowserRouter>
      <NotificationsList />
    </Page>
  );
}
