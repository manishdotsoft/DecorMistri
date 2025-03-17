import { Box } from '@mui/material';
import Card from '../../Molecules/Card/Card';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';
import { ProjectData } from '../../Data/CardData';

const CompletedProjects = () => {
  const projects = ProjectData || [];
  const completedProjects = projects.filter(
    (project) => project.status === 'Completed'
  );
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
      {/* <Card data={projects} buttonTitle={'Detail View'} /> */}
      <Card data={completedProjects} sx={{ width: '100%' }} />
    </Box>
  );
};

export default CompletedProjects;
