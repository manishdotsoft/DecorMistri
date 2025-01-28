import { Box } from '@mui/material';
import CompletedProject from '../../Molecules/Card/CompletedProject';

const CompletedProjects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '40px',
        flexWrap: 'wrap',
      }}
    >
      <CompletedProject />
    </Box>
  );
};

export default CompletedProjects;
