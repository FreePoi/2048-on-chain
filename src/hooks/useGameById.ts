import { useCallback, useEffect, useMemo, useState } from 'react';

import { useGame2048 } from './useGame2048';
import { useOperator } from './useOperator';

export const useGameBoardById = (gameId: number) => {
  const [boardState, setBoardState] = useState<{
    isLost: boolean;
    isWon: boolean;
    view: number[];
  }>({
    isLost: false,
    isWon: false,
    view: new Array(16).fill(0),
  });
  const { operatorInfo, signatureValid } = useOperator();
  const game2048 = useGame2048(signatureValid ? operatorInfo?.privateKey : undefined);
  const updateView = useCallback(async () => {
    console.log(game2048, gameId);

    if (!game2048 || gameId <= 0) {
      return;
    }

    console.log('gameID', gameId);

    const [isLost, isWon, view] = await Promise.all([
      game2048.isLost(gameId),
      game2048.isWon(gameId),
      game2048.showBoard(gameId),
    ]);

    setBoardState({
      isLost,
      isWon,
      view,
    });
    console.log('view', view);
  }, [game2048, gameId]);

  useEffect(() => {
    updateView();
  }, [gameId, updateView]);

  return useMemo(() => ({ boardState, updateView }), [boardState, updateView]);
};
