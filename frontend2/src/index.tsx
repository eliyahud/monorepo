import React from 'react';
import ReactDOM from 'react-dom';
import { Mainnet, DAppProvider } from '@usedapp/core';
import { App } from './App';
import { Grommet } from 'grommet';

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      'https://mainnet.infura.io/v3/3165a249c65f4198bf57200109b8fadf',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <Grommet plain>
        <App />
      </Grommet>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
