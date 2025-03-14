import { Box } from '@mui/material';
import Card from '../../Molecules/Card/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';

const CompletedProjects = () => {
  const projects = useSelector((state: RootState) => state.projects.projects);
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
      <Card data={projects} buttonTitle={'Detail View'} />
    </Box>
  );
};

export default CompletedProjects;
