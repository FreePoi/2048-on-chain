import { Box, CssBaseline } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Game from './pages/game';
import { inputGlobalStyles } from './theme/globalStyle';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      {inputGlobalStyles}
      <Layout>
        <Routes>
          <Route
            element={
              <Box
                sx={{
                  mt: 10,
                }}
              >
                <Game />
              </Box>
            }
            path="/"
          />
          <Route element={<Navigate to="/" />} path="*" />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
