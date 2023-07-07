import { Box } from '@mui/material';
import React from 'react';

import { pixelSize } from '../../styles';
import { useBoard } from '../Board/hooks/useBoard';

export const Grid = () => {
  const [, tileCount] = useBoard();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#bbada0',
        border: `${pixelSize}px solid #bbada0`,
        borderRadius: `${pixelSize * 0.75}px`,
      }}
    >
      {new Array(tileCount * tileCount).fill(0).map((_, index) => (
        <Box
          key={`${index}`}
          sx={{
            width: `${pixelSize * 12.5}px`,
            height: `${pixelSize * 12.5}px`,
            margin: `${pixelSize * 1}px`,
            borderRadius: `${pixelSize * 0.5}px`,
            background: 'rgba(238, 228, 218, 0.35)',
          }}
        />
      ))}
    </Box>
  );
};
