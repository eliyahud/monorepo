import { ChainId, useEthers, useTokenBalance } from '@usedapp/core';

type ContractList = {
  [key in Contract]: {
    name: string;
    address: string;
  };
};

type ContractListByChain = {
  [key in ChainId]?: ContractList;
};

export enum Contract {
  Chainlink = 'Chainlink',
  PersonalIdentityToken = 'PersonalIdentityToken',
}

export type ChainData = {
  name: string;
};

export type ChainList = {
  [key in ChainId]?: ChainData;
};
export const chains: ChainList = {
  [ChainId.Mainnet]: {
    name: 'Ethereum',
  },
  [ChainId.Kovan]: {
    name: 'Kovan',
  },
  [ChainId.Polygon]: {
    name: 'Polygon',
  },
};

export const contractsByChain: ContractListByChain = {
  [ChainId.Mainnet]: {
    [Contract.Chainlink]: {
      name: 'Chainlink',
      address: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    [Contract.PersonalIdentityToken]: {
      name: 'PersonalIdentityToken',
      address: '0x69190A15A2A0fB92e60f6cF122ce541940e47007', //fix
    },
  },
  [ChainId.Polygon]: {
    [Contract.Chainlink]: {
      name: 'Chainlink',
      address: '0xb0897686c545045afc77cf20ec7a532e3120e0f1',
    },
    [Contract.PersonalIdentityToken]: {
      name: 'PersonalIdentityToken',
      address: '0x69190A15A2A0fB92e60f6cF122ce541940e47007', //fix
    },
  },
  [ChainId.Kovan]: {
    [Contract.Chainlink]: {
      name: 'Chainlink',
      address: '0xa36085F69e2889c224210F603D836748e7dC0088',
    },
    [Contract.PersonalIdentityToken]: {
      name: 'PersonalIdentityToken',
      address: '0x69190A15A2A0fB92e60f6cF122ce541940e47007',
    },
  },
};

export const useChain = (): ChainData | null => {
  const { error, chainId } = useEthers();
  if (error || !chainId) {
    return null;
  }
  return chains[chainId] ?? null;
};

export const useCurrentContracts = (): ContractList | null => {
  const { chainId } = useEthers();
  if (!chainId) {
    return null;
  }
  return contractsByChain[chainId] ?? null;
};

export const useMyTokenBalance = (token: Contract) => {
  const { account } = useEthers();
  const list = useCurrentContracts();
  if (!list) {
    return null;
  }
  const tokenAddress = list[token].address;
  return useTokenBalance(tokenAddress, account);
};
