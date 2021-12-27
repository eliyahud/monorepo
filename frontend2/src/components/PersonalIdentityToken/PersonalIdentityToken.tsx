import React from 'react';
import { Contract } from '@ethersproject/contracts';
import { utils } from 'ethers';
import { useContractFunction } from '@usedapp/core';

import PITAbi from '../../abi/PersonalIdentityToken.json';

const pitInterface = new utils.Interface(PITAbi);
const pitContractAddress = '0x69190A15A2A0fB92e60f6cF122ce541940e47007';
const contract = new Contract(pitContractAddress, pitInterface);

export const usePIT = () => {
  const { state, send } = useContractFunction(contract, 'create', {
    transactionName: 'Mint',
  });

  const mintToken = (firstName: string, lastName: string, email: string) => {
    send(firstName, lastName, email);
  };

  return {
    mintToken,
    state,
  };
};
