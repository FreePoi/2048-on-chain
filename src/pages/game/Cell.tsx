import { Box } from '@mui/material';

const Cell: React.FC<{ number: number }> = ({ number }) => {
  return (
    <Box
      sx={{
        background: '#4caf50',
        color: 'white',
      }}
    >
      {number}
    </Box>
  );
};

export default Cell;
