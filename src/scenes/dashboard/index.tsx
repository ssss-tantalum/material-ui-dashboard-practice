import React from 'react';

import { Box } from '@mui/material';

import Header from '../../components/Header';

export const Dashboard = () => {
  return (
    <Box
      sx={{
        m: '20px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Header
          title="Dashboard"
          subtitle="welcome to ssss.tamtalum dashboard"
        ></Header>
      </Box>
    </Box>
  );
};
