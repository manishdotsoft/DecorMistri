import { Outlet } from 'react-router-dom';
import Sidebar from '../../organisms/SideBar/Sidebar';
import { Box } from '@mui/material';

const DashboardLayout = () => (
  <Box display="flex">
    <Sidebar />
    <Box flex={1}>
      <Outlet />
    </Box>
  </Box>
);

export default DashboardLayout;
