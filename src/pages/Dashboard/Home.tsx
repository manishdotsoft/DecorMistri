import Sidebar from '../../organisms/SideBar/Sidebar';
import { Box } from '@mui/material';
import MainHeader from '../../organisms/Header/MainHeader/MainHeader.styel.tsx/MainHeader';

const DashboardLayout = () => (
  <Box>
    <MainHeader />
    <Sidebar />
  </Box>
);

export default DashboardLayout;
