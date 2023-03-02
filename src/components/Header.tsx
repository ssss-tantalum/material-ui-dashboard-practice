import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';

import { tokens } from '../theme';

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        mb: '30px'
      }}
    >
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="Bold"
        sx={{ m: '0 0 5px 0' }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
