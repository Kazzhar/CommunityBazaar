import React from 'react';
import { Container } from '@mui/system';
import PopularPosts from './main-content/PopularPosts';

const AppContentArea = () => {
  return (
    <Container maxWidth="lg">
      <PopularPosts />
    </Container>
  );
};

export default AppContentArea;
