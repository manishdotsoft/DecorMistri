import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';
import { AppContainer, Main, StyledAppLayout } from './AppLayout.style';
import MainHeader from '../Mainheader/MainHeader';

const AppLayout = () => {
  return (
    <>
      <AppContainer>
        <MainHeader />
        <StyledAppLayout>
          <Sidebar />
          <Main>
            <Outlet />
          </Main>
        </StyledAppLayout>
      </AppContainer>
    </>
  );
};

export default AppLayout;
