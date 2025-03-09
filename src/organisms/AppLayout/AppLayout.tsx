import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';
import MainHeader from '../Header/MainHeader/MainHeader.styel.tsx/MainHeader';
import { Main, StyledAppLayout } from './AppLayout.style';
// import { Box } from '@mui/system';

const AppLayout = () => {
  return (
    <>
      <MainHeader />
      <StyledAppLayout>
        {/* <Box sx={{ minWidth: '300px' }}> */}
        <Sidebar />
        {/* </Box> */}
        <Main>
          <Outlet />
        </Main>
      </StyledAppLayout>
    </>
  );
};

export default AppLayout;
