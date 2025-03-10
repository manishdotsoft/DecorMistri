import { Box } from '@mui/material';
import Card from '../../Molecules/Card/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';

const UpcomeingProjets = () => {
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
      <Card data={projects} buttonTitle={'Move To Live'} />
    </Box>
  );
};

export default UpcomeingProjets;
