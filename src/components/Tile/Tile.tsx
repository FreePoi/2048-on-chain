import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import invariant from 'tiny-invariant';

import { usePrevProps } from '../../hooks/usePrevProps';
import { pixelSize } from '../../styles';
import { useBoard } from '../Board/hooks/useBoard';

type Props = {
  // tile value - 2, 4, 8, 16, 32, ..., 2048.∂
  value: number;
  // an array containing the x and y index on the board.
  position: [number, number];
};

export const Tile = ({ position, value }: Props) => {
  // retrieves board properties
  const [containerWidth, tileCount] = useBoard();
  //  state required to animate the highlight
  const [scale, setScale] = useState(1);

  // the previous value (prop) - it is undefined if it is a new tile.
  const previousValue = usePrevProps<number>(value);

  // check if tile is within the board boundries
  const withinBoardBoundaries = position[0] < tileCount && position[1] < tileCount;

  invariant(withinBoardBoundaries, 'Tile out of bound');

  // if it is a new tile...
  const isNew = previousValue === undefined;
  // ...or its value has changed...
  const hasChanged = previousValue !== value;
  // ... then the tile should be highlighted.
  const shallHighlight = isNew || hasChanged;

  // useEffect will decide if highlight should be triggered.
  useEffect(() => {
    if (shallHighlight) {
      setScale(1.1);
      setTimeout(() => setScale(1), 100);
    }
  }, [shallHighlight, scale]);

  /**
   * Converts tile position from array index to pixels.
   */
  const positionToPixels = (position: number) => {
    return (position / tileCount) * containerWidth;
  };

  return (
    <Box
      className={`tile-${value}`}
      sx={{
        top: positionToPixels(position[1]),
        left: positionToPixels(position[0]),
        transform: `scale(${scale})`,
        position: 'absolute',
        width: `${pixelSize * 12.5}px`,
        height: `${pixelSize * 12.5}px`,
        margin: `${pixelSize * 1}px`,
        borderRadius: `${pixelSize * 0.5}px`,
        backgroundColor: '#eee4da',
        visibility: value !== 0 ? 'visible' : 'hidden',
        color: '#776e65',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: `${pixelSize * 6}px`,
        lineHeight: 2.1,
        transitionProperty: 'left, top, transform',
        transitionDuration: '250ms, 250ms, 100ms',

        '&.tile-128, &.tile-256, &.tile-512': {
          fontSize: pixelSize * 5.5,
          lineHeight: 2.28,
        },

        '&.tile-1024, &.tile-2048': {
          fontSize: pixelSize * 4,
          lineHeight: 3.18,
        },

        '&.tile-2': {
          background: '#eee4da',
          boxShadow: `0 0 30px 10px rgba(243, 215, 116, 0),
            inset 0 0 0 1px rgba(255, 255, 255, 0)`,
        },

        '&.tile-4': {
          background: '#ede0c8',
          boxShadow: `0 0 30px 10px rgba(243, 215, 116, 0),
            inset 0 0 0 1px rgba(255, 255, 255, 0)`,
        },

        '&.tile-8': {
          color: '#f9f6f2',
          background: '#f2b179',
        },

        '&.tile-16': {
          color: '#f9f6f2',
          background: '#f59563',
        },

        '&.tile-32': {
          color: '#f9f6f2',
          background: '#f67c5f',
        },

        '&.tile-64': {
          color: '#f9f6f2',
          background: '#f65e3b',
        },

        '&.tile-128': {
          color: '#f9f6f2',
          background: '#edcf72',
          boxShadow: `0 0 30px 10px rgba(243, 215, 116, 0.2381),
            inset 0 0 0 1px rgba(255, 255, 255, 0.14286)`,
        },

        '&.tile-256': {
          color: '#f9f6f2',
          background: '#edcc61',
          boxShadow: `0 0 30px 10px rgba(243, 215, 116, 0.31746),
            inset 0 0 0 1px rgba(255, 255, 255, 0.19048)`,
        },

        '&.tile-512': {
          color: '#f9f6f2',
          background: '#edc850',
          boxShadow: `0 0 30px 10px rgba(243, 215, 116, 0.39683),
            inset 0 0 0 1px rgba(255, 255, 255, 0.2381)`,
        },

        '&.tile-1024': {
          color: '#f9f6f2',
          background: '#edc53f',
          boxShadow: `0 0 30px 10px rgba(243, 215, 116, 0.47619),
            inset 0 0 0 1px rgba(255, 255, 255, 0.28571)`,
        },

        '&.tile-2048': {
          color: '#f9f6f2',
          background: '#edc22e',
          boxShadow: `0 0 30px 10px rgba(243, 215, 116, 0.55556),
            inset 0 0 0 1px rgba(255, 255, 255, 0.33333)`,
        },
      }}
    >
      {value}
    </Box>
  );
};
