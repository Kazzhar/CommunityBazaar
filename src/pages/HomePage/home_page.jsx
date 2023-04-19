import React from 'react'
import './home_page.css'
import {appWrapper, contentWrapper, sideBarWrapper, scrollListWrapper, contentAreaWrapper} from '../../Components/HomePage_comp/styles/styles'
import { Box } from '@mui/system';
import Navbar from '../../Components/HomePage_comp/navigation/Navbar'
import SideList from '../../Components/HomePage_comp/SideList'
import AppContentArea from '../../Components/HomePage_comp/AppContentArea'
export const HomePage = () => {
    return (
        <React.Fragment>
          <Box sx={appWrapper}>
            <Navbar />
            <Box sx={contentWrapper}>
              <Box sx={sideBarWrapper}>
                <Box sx={scrollListWrapper}>
                  <SideList />
                </Box>
            </Box>
              <Box sx={contentAreaWrapper}>
                <AppContentArea />
              </Box>
            </Box>
          </Box>
        </React.Fragment>
      );
}
