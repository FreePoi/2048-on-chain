import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/material';
import { BigNumber, ethers } from 'ethers';
import { useCallback } from 'react';
import { useMutation } from 'react-query';

import EnsureNetworkButton from '../../components/EnsureNetworkButton';
import { TwentyFortyEight } from '../../core/abis';
import { getLogArgs } from '../../core/utils';
import useAlertTransaction from '../../hooks/useAlertTransaction';
import { useGame2048 } from '../../hooks/useGame2048';
import { useOperator } from '../../hooks/useOperator';

const StartGame: React.FC<{ onGameStarted: (gameId: number) => void }> = ({ onGameStarted }) => {
  const { operatorInfo, signatureValid } = useOperator();
  const game2048 = useGame2048(signatureValid ? operatorInfo?.privateKey : undefined);
  const { alertConfirmed, alertFailed } = useAlertTransaction();

  const { isLoading, mutate: startGame } = useMutation<string | undefined, any, void>({
    mutationFn: useCallback(async () => {
      if (!game2048) {
        return;
      }

      console.log('game2048', game2048);

      const tx = await game2048.startGame();
      const receipt = await tx.wait();
      const iface = new ethers.utils.Interface(TwentyFortyEight.abi);
      const gameId: BigNumber = getLogArgs(receipt.logs, iface, 'gameStarted').gameId;

      onGameStarted(gameId.toNumber());

      return receipt.blockHash;
    }, [game2048, onGameStarted]),
    onSuccess(hash) {
      if (!hash) {
        return;
      }

      alertConfirmed(hash);
    },
    onError(e: any) {
      console.error(e);
      alertFailed(e.message);
    },
  });

  return (
    <Box>
      <EnsureNetworkButton>
        <LoadingButton
          fullWidth
          loading={isLoading}
          onClick={() => startGame()}
          variant="contained"
        >
          New Game
        </LoadingButton>
      </EnsureNetworkButton>
    </Box>
  );
};

export default StartGame;
