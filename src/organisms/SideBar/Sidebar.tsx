import Notifications from '../../Molecules/Notifications/Notifications';
import MainNav from '../MainNav/MainNav';
import { StyledSidebarMain } from './Sidebar.style';

const Sidebar = () => {
  return (
    <>
      <StyledSidebarMain>
        <MainNav />

        <Notifications />
      </StyledSidebarMain>
    </>
  );
};

export default Sidebar;
