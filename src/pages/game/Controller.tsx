import type { TransactionResponse } from '../../core/transaction-response';

import { LoadingButton } from '@mui/lab';
import { Box, Grid } from '@mui/material';
import { BigNumber, ethers } from 'ethers';
import { useCallback, useEffect } from 'react';
import { useMutation } from 'wagmi';

import { TwentyFortyEight } from '../../core/abis';
import { Game2048 } from '../../core/game2048';
import { getLogArgs } from '../../core/utils';
import useAlertTransaction from '../../hooks/useAlertTransaction';
import { useGameId } from '../../hooks/useGameId';

type Direction = 'left' | 'right' | 'up' | 'down';

const Controller: React.FC<{
  game2048: Game2048 | null;
  onUpdateView: (view: number[]) => void;
}> = ({ game2048, onUpdateView }) => {
  const [gameId] = useGameId();
  const { alertFailed } = useAlertTransaction();
  const { isLoading, mutate: move } = useMutation<number[], unknown, Direction>({
    mutationFn: useCallback(
      async (direction: Direction) => {
        if (!game2048) {
          throw new Error(`game2048: ${game2048}`);
        }

        let tx: TransactionResponse;

        console.time('send move');

        if (direction === 'left') {
          tx = await game2048.moveLeft(gameId);
        } else if (direction === 'right') {
          tx = await game2048.moveRight(gameId);
        } else if (direction === 'up') {
          tx = await game2048.moveUp(gameId);
        } else {
          tx = await game2048.moveDown(gameId);
        }

        console.timeEnd('send move');
        console.time('wait move');

        const receipt = await tx.wait();
        const iface = new ethers.utils.Interface(TwentyFortyEight.abi);
        const boardView: BigNumber[] = getLogArgs(receipt.logs, iface, 'NewBoardView').boardView;

        console.timeEnd('wait move');

        return boardView.map(number => number.toNumber());
      },
      [game2048, gameId]
    ),
    onSuccess(boardView) {
      onUpdateView(boardView);
    },
    onError(e: any) {
      console.error(e);
      alertFailed(e.message);
    },
  });

  const keyUpHandler = useCallback(
    () => (e: KeyboardEvent) => {
      console.log('key up', e);

      if (isLoading) {
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          move('up');
          break;
        case 'ArrowDown':
          move('down');
          break;
        case 'ArrowLeft':
          move('left');
          break;
        case 'ArrowRight':
          move('right');
          break;
        default:
          break;
      }
    },
    [isLoading, move]
  );
  const keyDownHandler = useCallback(
    () => (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          e.preventDefault();
          break;
        default:
          break;
      }
    },
    []
  );

  useEffect(() => {
    console.log('addEventListener');

    document.addEventListener('keyup', keyUpHandler, false);
    // Disable arrow keys scroll page
    document.addEventListener('keydown', keyDownHandler, false);

    return () => {
      console.log('remove');

      document.removeEventListener('keyup', keyUpHandler, false);
      document.removeEventListener('keydown', keyDownHandler, false);
    };
  }, [keyDownHandler, keyUpHandler]);

  return (
    <Box>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <LoadingButton
            fullWidth
            loading={isLoading}
            onClick={() => move('up')}
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
