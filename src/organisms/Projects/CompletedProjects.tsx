import { Box } from '@mui/material';
import CompletedProject from '../../Molecules/Card/CompletedProject';

const CompletedProjects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <CompletedProject />
    </Box>
  );
};

export default CompletedProjects;
