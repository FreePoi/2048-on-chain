import { JsonRpcProvider } from '@ethersproject/providers';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

import { useConfig } from '../contexts/ConfigContext';
import { Game2048 } from '../core/game2048';

export const useGame2048 = (privateKey?: string) => {
  const { contractAddress } = useConfig();
  const { network } = useConfig();
  const [game2048, setGame2048] = useState<Game2048>();

  useEffect(() => {
    if (!privateKey) {
      return;
    }

    const provider = new JsonRpcProvider(network.rpcUrls.default.http[0], {
      chainId: network.id,
      name: network.name,
    });
    const signer = new ethers.Wallet(privateKey, provider);
    const game2048 = new Game2048(contractAddress, signer);

    setGame2048(game2048);
  }, [contractAddress, network.id, network.name, network.rpcUrls.default.http, privateKey]);

  return game2048 || null;
};
