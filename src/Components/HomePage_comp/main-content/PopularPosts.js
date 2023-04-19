import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { cardContentItems } from '../data/app.data';

import {
  postSectionWrapper,
  communitiesWrapper,
  popularPostHeader,
  postSortContainer,
} from '../styles/styles';
import Policy from './Policy';
import InfoCard from './InfoCard';

const PopularPosts = () => {
  return (
    <React.Fragment>
      <Typography sx={popularPostHeader} variant="h6">
        
      </Typography>
      <Box sx={postSortContainer}>
        <Box sx={postSectionWrapper}>
    
          {cardContentItems.map((item) => {
            return <InfoCard key={item.id} item={item} />;
          })}
        </Box>
        <Box sx={communitiesWrapper}>
          <Policy />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default PopularPosts;
