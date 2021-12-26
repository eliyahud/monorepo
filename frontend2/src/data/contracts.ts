import { ChainId, useEthers, useTokenBalance } from '@usedapp/core';

type ContractListByChain = {
  [key in ChainId]?: any;
};

export enum Token {
  LINK = 'LINK',
}

export type ChainList = {
  [key in ChainId]?: {
    name: string;
  };
};
export const chainList: ChainList = {
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

export const tokenList: ContractListByChain = {
  [ChainId.Mainnet]: {
    [Token.LINK]: {
      address: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
  },
  [ChainId.Polygon]: {
    [Token.LINK]: {
      address: '0xb0897686c545045afc77cf20ec7a532e3120e0f1',
    },
  },
  [ChainId.Kovan]: {
    [Token.LINK]: {
      address: '0xa36085F69e2889c224210F603D836748e7dC0088',
    },
  },
};

export const useCurrentContracts = () => {
  const { chainId } = useEthers();
  if (!chainId) {
    return null;
  }
  return tokenList[chainId] ?? null;
};

export const useMyTokenBalance = (token: Token) => {
  const { account } = useEthers();
  const list = useCurrentContracts();
  if (!list) {
    return null;
  }
  const tokenAddress = list[token].address;
  return useTokenBalance(tokenAddress, account);
};
