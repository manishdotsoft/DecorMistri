import { Box } from '@mui/material';
import LiveProject from '../../Molecules/Card/LiveProjectCard';
const LiveProjects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      <LiveProject />
    </Box>
  );
};

export default LiveProjects;
