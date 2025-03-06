import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';
import MainHeader from '../Header/MainHeader/MainHeader.styel.tsx/MainHeader';
import { Main, StyledAppLayout } from './AppLayout.style';

const AppLayout = () => {
  return (
    <>
      <MainHeader />
      <StyledAppLayout>
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </StyledAppLayout>
    </>
  );
};

export default AppLayout;
