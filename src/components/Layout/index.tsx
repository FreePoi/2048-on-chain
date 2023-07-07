import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

export const BaseLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Box
        margin="0 auto"
        maxWidth="1440px"
        minHeight="100vh"
        position="relative"
        px={[1.5, 2, 2.5]}
        py={0}
        zIndex={10}
      >
        {children}
      </Box>
    </>
  );
};

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BaseLayout>
      <Header />
      <Box
        sx={{
          minHeight: 'calc(100vh - 200px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
      <Footer />
    </BaseLayout>
  );
};

export default Layout;
