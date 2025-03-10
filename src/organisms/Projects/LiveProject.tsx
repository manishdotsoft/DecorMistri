import Card from '../../Molecules/Card/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';
import { Box } from '@mui/material';

const LiveProjects = () => {
  const projects = useSelector((state: RootState) => state.projects.projects);
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <DashboardHeader title="Dashboard" />
      <Card data={projects} buttonTitle={'open project'} />
    </Box>
  );
};

export default LiveProjects;
