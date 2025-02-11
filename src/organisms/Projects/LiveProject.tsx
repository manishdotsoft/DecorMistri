import { Box } from '@mui/material';
import Card from '../../Molecules/Card/ProjectCard/Card';
import { ProjectStatus } from '../../store/reducers/projectDataSlice';

import { Divider } from '../../pages/Dashboard/Dashboard.styel';

const LiveProjects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Divider />
      <Card status={ProjectStatus.Live} buttonTitle=" Open  project" />
    </Box>
  );
};

export default LiveProjects;
