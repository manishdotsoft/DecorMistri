import { Box } from '@mui/material';
import Card from '../../Molecules/Card/Card';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';
import { ProjectData } from '../../Data/CardData';

const UpcomeingProjets = () => {
  // const projects = useSelector((state: RootState) => state.projects.projects);
  const projects = ProjectData || [];
  const upcomingProjects = projects.filter(
    (project) => project.status === 'Upcoming'
  );
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
      {/* <Card data={projects} buttonTitle={'Move To Live'} /> */}
      <Card data={upcomingProjects} sx={{ width: '100%' }} />
    </Box>
  );
};

export default UpcomeingProjets;
