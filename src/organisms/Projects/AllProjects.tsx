import { Box } from '@mui/material';
import UpcomingProjectCard from '../../Molecules/Card/UpcomingProject';
import LiveProject from '../../Molecules/Card/LiveProjectCard';
import CompletedProjects from './CompletedProjects';
const AllProjects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      <LiveProject />
      <CompletedProjects />
      <UpcomingProjectCard />
    </Box>
  );
};

export default AllProjects;
