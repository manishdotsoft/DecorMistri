import { Box } from '@mui/material';

import CompletedProjects from './CompletedProjects';
import LiveProjects from './LiveProject';
import UpcomeingProjets from './UpcomingProjects';
const AllProjects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      <LiveProjects />
      <CompletedProjects />
      <UpcomeingProjets />
    </Box>
  );
};

export default AllProjects;
