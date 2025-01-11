import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../organisms/SideBar/Sidebar';
import TaskBoard from '../TaskBoard';
import { Container, SidebarContainer, MainContent } from './AppLayout.styel';

const AppLayout = () => {
  const location = useLocation();
  const isAuthenticated = Boolean(localStorage.getItem('authToken'));

  const pathsWithoutSidebar = ['/', '/forgot-password', '/signup'];

  const shouldShowSidebar =
    isAuthenticated &&
    !pathsWithoutSidebar.some((path) => location.pathname.startsWith(path));

  return (
    <Container>
      {!shouldShowSidebar && (
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
      )}
      <MainContent>
        {!shouldShowSidebar && <TaskBoard />}
        <Outlet />
      </MainContent>
    </Container>
  );
};

export default AppLayout;
