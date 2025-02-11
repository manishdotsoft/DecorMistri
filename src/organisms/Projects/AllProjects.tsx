import { Box } from '@mui/material';
import { ProjectStatus } from '../../store/reducers/projectDataSlice';
import Card from '../../Molecules/Card/ProjectCard/Card';

import { Divider } from '../../pages/Dashboard/Dashboard.styel';

const AllProjects = () => {
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

      <Card status={ProjectStatus.Live} buttonTitle="Open project" />
      <Card status={ProjectStatus.Complete} buttonTitle="Detail View" />
      <Card status={ProjectStatus.Upcoming} buttonTitle="Move to Live" />
    </Box>
  );
};

export default AllProjects;
