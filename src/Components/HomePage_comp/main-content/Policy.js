import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {
  footerWrapper,
  grayText,
} from '../styles/styles';

const Policy = () => {
  return (
    <React.Fragment>
      <Box sx={footerWrapper}>
        <Typography variant="caption" sx={grayText}>
          CommunityBazaar Inc 2023 All rights reserved                      
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Policy;
