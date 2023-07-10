import { useCallback, useEffect, useMemo, useState } from 'react';

import { Game2048 } from './../core/game2048';

export const useGameBoardById = (game2048: Game2048 | null, gameId: number) => {
  const [boardState, setBoardState] = useState<{
    isLost: boolean;
    isWon: boolean;
    view: number[];
  }>({
    isLost: false,
    isWon: false,
    view: new Array(16).fill(0),
  });
  const getBoard = useCallback(async () => {
    if (!game2048 || gameId <= 0) {
      return;
    }

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
  }, [game2048, gameId]);

  useEffect(() => {
    getBoard();
  }, [gameId, getBoard]);

  const updateView = useCallback((view: number[]) => {
    setBoardState({
      isLost: false,
      isWon: false,
      view,
    });
  }, []);

  return useMemo(() => ({ boardState, updateView }), [boardState, updateView]);
};
