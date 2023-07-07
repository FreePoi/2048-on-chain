import { Box } from '@mui/material';
import React from 'react';

import { pixelSize } from '../../styles';
import { Grid } from '../Grid';
import { Tile, TileMeta, tileTotalWidth } from '../Tile';
import { BoardProvider } from './context/BoardContext';
import { boardMargin, tileCount as defaultTileCount } from './models/Board';

type Props = {
  tiles: TileMeta[];
  tileCountPerRow: number;
};

export const Board = ({ tileCountPerRow = defaultTileCount, tiles }: Props) => {
  // container width = tile width * tile count per row
  const containerWidth = tileTotalWidth * tileCountPerRow;
  // board width = container width + margin
  const boardWidth = containerWidth + boardMargin;

  // render all tiles on the board
  const tileList = tiles.map(({ position, value }) => (
    <Tile key={`tile-${position[0]}.${position[1]}`} position={position} value={value} />
  ));

  return (
    <Box
      sx={{
        position: 'relative',
        width: `${boardWidth}px`,
      }}
    >
      <BoardProvider containerWidth={containerWidth} tileCount={tileCountPerRow}>
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            margin: `${pixelSize * 1}px`,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {tileList}
        </Box>
        <Grid />
      </BoardProvider>
    </Box>
  );
};
