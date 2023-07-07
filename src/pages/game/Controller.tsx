import type { TransactionResponse } from '@ethersproject/providers';

import { LoadingButton } from '@mui/lab';
import { Box, Grid } from '@mui/material';
import { useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useMutation } from 'wagmi';

import useAlertTransaction from '../../hooks/useAlertTransaction';
import { useGame2048 } from '../../hooks/useGame2048';
import { useOperator } from '../../hooks/useOperator';

type Direction = 'left' | 'right' | 'top' | 'down';

const Controller: React.FC<{ onUpdateView: () => void }> = ({ onUpdateView }) => {
  const { operatorInfo, signatureValid } = useOperator();
  const game2048 = useGame2048(signatureValid ? operatorInfo?.privateKey : undefined);
  const [gameId] = useLocalStorage(`game.id.${operatorInfo?.privateKey}`, -1);
  const { alertFailed } = useAlertTransaction();
  const { isLoading, mutate: move } = useMutation<any, any, any>({
    mutationFn: useCallback(
      async (direction: Direction) => {
        if (!game2048) {
          return;
        }

        let tx: TransactionResponse;

        if (direction === 'left') {
          console.time('send moveLeft');
          tx = await game2048.moveLeft(gameId);
          console.timeEnd('send moveLeft');
          console.time('wait moveLeft');
          await tx.wait();
          console.timeEnd('wait moveLeft');
        } else if (direction === 'right') {
          console.time('send moveRight');
          tx = await game2048.moveRight(gameId);
          console.timeEnd('send moveRight');
          console.time('wait moveRight');
          await tx.wait();
          console.timeEnd('wait moveRight');
        } else if (direction === 'top') {
          console.time('send moveUp');
          tx = await game2048.moveUp(gameId);
          console.timeEnd('send moveUp');
          console.time('wait moveUp');
          await tx.wait();
          console.timeEnd('wait moveUp');
        } else {
          console.time('send moveDown');
          tx = await game2048.moveDown(gameId);
          console.timeEnd('send moveDown');
          console.time('wait moveDown');
          await tx.wait();
          console.timeEnd('wait moveDown');
        }
      },
      [game2048, gameId]
    ),
    onSuccess() {
      onUpdateView();
      // alertConfirmed(hash);
    },
    onError(e: any) {
      console.error(e);
      alertFailed(e.message);
    },
  });

  return (
    <Box>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <LoadingButton
            fullWidth
            loading={isLoading}
            onClick={() => move('top')}
            variant="contained"
          >
            UP
          </LoadingButton>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <LoadingButton
            fullWidth
            loading={isLoading}
            onClick={() => move('left')}
            variant="contained"
          >
            LEFT
          </LoadingButton>
        </Grid>
        <Grid item xs={4}>
          <LoadingButton
            fullWidth
            loading={isLoading}
            onClick={() => move('down')}
            variant="contained"
          >
            DOWN
          </LoadingButton>
        </Grid>
        <Grid item xs={4}>
          <LoadingButton
            fullWidth
            loading={isLoading}
            onClick={() => move('right')}
            variant="contained"
          >
            RIGHT
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Controller;
