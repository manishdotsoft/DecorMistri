import { Box } from '@mui/material';
import UpcomingProjectCard from '../../Molecules/Card/UpcomingProject';

const UpcomeingProjets = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <UpcomingProjectCard />
    </Box>
  );
};

export default UpcomeingProjets;
