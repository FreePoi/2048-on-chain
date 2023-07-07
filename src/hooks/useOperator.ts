import { ethers } from 'ethers';
import { useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useAccount } from 'wagmi';

import { OperatorInfo } from '../pages/game';

export const useOperator = () => {
  const { address } = useAccount();
  const [operatorInfo, updateOperatorInfo] = useLocalStorage<OperatorInfo | null>(
    `game.account.${address?.toLowerCase()}`,
    null
  );
  const signatureValid = useMemo(() => {
    if (!operatorInfo) {
      return false;
    }

    const messageHash = ethers.utils.hashMessage(operatorInfo.privateKey);
    const signingAddress = ethers.utils.verifyMessage(messageHash, operatorInfo.signature);

    return signingAddress.toLowerCase() === operatorInfo.author.toLowerCase();
  }, [operatorInfo]);

  return useMemo(
    () => ({
      signatureValid,
      operatorInfo,
      updateOperatorInfo,
    }),
    [operatorInfo, signatureValid, updateOperatorInfo]
  );
};
