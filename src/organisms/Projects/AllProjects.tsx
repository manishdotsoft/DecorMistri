import { Box } from '@mui/material';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
// import Card from '../../Molecules/Card/Card';

// import { Divider } from '../../pages/Dashboard/Dashboard.styel';

const AllProjects = () => {
  // const projects = useSelector((state: RootState) => state.projects.projects);
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <DashboardHeader title="Dashboard" />
      {/* <Card data={projects} buttonTitle='' /> */}
    </Box>
  );
};

export default AllProjects;
