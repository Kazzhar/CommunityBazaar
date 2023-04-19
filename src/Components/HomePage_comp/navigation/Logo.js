import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {RiCommunityFill} from 'react-icons/ri';

import { flexAlignCenter, logoText } from '../styles/styles';

const Logo = () => {
  return (
    <Box sx={flexAlignCenter}>
      <RiCommunityFill size={32} />
      <Typography variant="h6" component="div" sx={logoText}>
        CommunityBazaar
      </Typography>
    </Box>
  );
};

export default Logo;
