import { Box } from '@mui/material';
import Card from '../../Molecules/Card/ProjectCard/Card';
import { ProjectStatus } from '../../store/reducers/projectDataSlice';

import { Divider } from '../../pages/Dashboard/Dashboard.styel';

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
      <Divider />
      <Card status={ProjectStatus.Complete} buttonTitle="Detail View" />
    </Box>
  );
};

export default CompletedProjects;
