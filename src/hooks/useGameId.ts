import { Dispatch, SetStateAction, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useAccount } from 'wagmi';

export const useGameId = (): [number, Dispatch<SetStateAction<number>>] => {
  const { address } = useAccount();
  const [gameId, updateGameId] = useLocalStorage(`game.id.${address}`, -1);

  return useMemo(() => [gameId, updateGameId], [gameId, updateGameId]);
};
