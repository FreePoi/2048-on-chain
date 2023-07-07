import { Box, Button, Stack, Typography } from '@mui/material';
import { ethers } from 'ethers';
import { useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useAccount, useSignMessage } from 'wagmi';

import { Board } from '../../components/Board/Board';
import { tileCount } from '../../components/Board/models/Board';
import { useGameBoardById } from '../../hooks/useGameById';
import { useOperator } from '../../hooks/useOperator';
import Controller from './Controller';
import StartGame from './StartGame';

export interface OperatorInfo {
  privateKey: string;
  signature: string;
  author: string;
}

const Game: React.FC = () => {
  const { address } = useAccount();
  const sign = useSignMessage();
  const { operatorInfo, signatureValid, updateOperatorInfo } = useOperator();
  const [gameId, updateGameId] = useLocalStorage(`game.id.${operatorInfo?.privateKey}`, -1);
  const { boardState, updateView } = useGameBoardById(gameId);

  const signup = useCallback(() => {
    if (!signatureValid && sign.signMessageAsync && address) {
      const privateKey = ethers.Wallet.createRandom().privateKey;
      const messageHash = ethers.utils.hashMessage(privateKey);

      sign.signMessageAsync({ message: messageHash }).then(signature =>
        updateOperatorInfo({
          privateKey,
          signature,
          author: address,
        })
      );
    }
  }, [address, sign, signatureValid, updateOperatorInfo]);

  // console.log('gameId', gameId, 'boardState', boardState);

  return (
    <Box pb={4}>
      {!signatureValid ? (
        <Box>
          <Button onClick={signup}>Sign Up</Button>
        </Box>
      ) : gameId < 0 || boardState.view.every(number => number === 0) ? (
        <StartGame onGameStarted={updateGameId} />
      ) : (
        <>
          <Typography>
            Operator Address:{' '}
            {!operatorInfo ? '?' : new ethers.Wallet(operatorInfo?.privateKey).address}
          </Typography>
          <Stack alignItems="flex-end" flexDirection="row">
            <Board
              tileCountPerRow={tileCount}
              tiles={boardState.view.map((number, index) => ({
                id: number,
                position: [index % tileCount, Math.floor(index / tileCount)],
                value: number,
                mergeWith: number,
              }))}
            />
            <Controller onUpdateView={updateView} />
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Game;
