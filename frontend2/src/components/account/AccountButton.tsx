import React, { useEffect, useState } from 'react';
import { shortenAddress, useEthers, useLookupAddress } from '@usedapp/core';
import { Button } from '../base/Button';
import { Colors } from '../../global/styles';
import styled from 'styled-components';

import { AccountModal } from './AccountModal';
import { useChain } from '../../data/contracts';

export const AccountButton = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers();
  const ens = useLookupAddress();
  const [showModal, setShowModal] = useState(false);
  const [activateError, setActivateError] = useState('');
  const { error } = useEthers();
  const chainData = useChain();
  useEffect(() => {
    if (error) {
      setActivateError(error.message);
    }
  }, [error]);

  const activate = async () => {
    setActivateError('');
    activateBrowserWallet();
  };

  return (
    <Account>
      <ErrorWrapper>{activateError}</ErrorWrapper>
      {showModal && <AccountModal setShowModal={setShowModal} />}
      {account ? (
        <>
          {chainData ? (
            <ChainIndicator>{chainData.name}</ChainIndicator>
          ) : (
            <UnsupportedChainIndicator>Unsupported</UnsupportedChainIndicator>
          )}
          <AccountLabel onClick={() => setShowModal(!showModal)}>
            {ens ?? shortenAddress(account)}
          </AccountLabel>
          <LoginButton onClick={() => deactivate()}>Disconnect</LoginButton>
        </>
      ) : (
        <LoginButton onClick={activate}>Connect</LoginButton>
      )}
    </Account>
  );
};

const ChainIndicator = styled.div`
  background-color: rgb(130, 72, 229);
  color: rgb(255, 255, 255);
  border-radius: 3px;
  line-height: normal;
  text-transform: capitalize;
  margin: 0px;
  padding: 4px 8px;
  min-width: 70px;
  text-align: center;
  margin-right: 10px;
`;

const UnsupportedChainIndicator = styled(ChainIndicator)`
  background-color: rgb(236, 6, 14);
`;

const ErrorWrapper = styled.div`
  color: #ff3960;
  margin-right: 40px;
  margin-left: 40px;
  overflow: auto;
`;

const Account = styled.div`
  display: flex;
  align-items: center;
`;

const LoginButton = styled(Button)`
  background-color: ${Colors.Yellow[100]};
`;

const AccountLabel = styled(Button)`
  height: 32px;
  margin-right: -40px;
  padding-right: 40px;
  padding-left: 8px;
  background-color: ${Colors.Yellow[100]};
  font-size: 12px;
`;
