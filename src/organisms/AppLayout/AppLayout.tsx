import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';
import { Main, StyledAppLayout } from './AppLayout.style';
import MainHeader from '../Mainheader/MainHeader';

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
