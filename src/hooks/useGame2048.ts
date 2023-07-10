import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { ethers } from 'ethers';
import { useEffect, useRef, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { useConfig } from '../contexts/ConfigContext';
import { Game2048 } from '../core/game2048';
import { useOperator } from './useOperator';

export const useGame2048 = () => {
  const { operatorInfo, signatureValid } = useOperator();
  const privateKey = signatureValid ? operatorInfo?.privateKey : undefined;
  const [nonce, updateNonce] = useLocalStorage(`nonce.${privateKey}`, 0);
  const nonceRef = useRef(nonce);
  const { contractAddress, network } = useConfig();
  const [game2048, setGame2048] = useState<Game2048>();

  useEffect(() => {
    if (!privateKey) {
      return;
    }

    const rpcUrl = network.rpcUrls.default.http[0];
    const provider = new StaticJsonRpcProvider(network.rpcUrls.default.http[0], {
      chainId: network.id,
      name: network.name,
    });

    const signer = new ethers.Wallet(privateKey, provider);
    const game2048 = new Game2048(contractAddress, signer, rpcUrl, {
      get() {
        return nonceRef.current;
      },
      set(nonce: number) {
        updateNonce(nonce);
        nonceRef.current = nonce;
      },
    });

    setGame2048(game2048);
  }, [
    contractAddress,
    network.id,
    network.name,
    network.rpcUrls.default.http,
    privateKey,
    updateNonce,
  ]);

  return game2048 || null;
};
