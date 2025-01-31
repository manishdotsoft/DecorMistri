import { Box } from '@mui/material';
import { ProjectStatus } from '../../store/reducers/projectDataSlice';
import Card from '../../Molecules/Card/ProjectCard/Card';

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
      {/* Correct the prop name to 'status' */}
      <Card status={ProjectStatus.Live} buttonTitle="OPEN PROJECT" />
      <Card status={ProjectStatus.Complete} buttonTitle="Detail View" />
      <Card status={ProjectStatus.Upcoming} buttonTitle="Move to Live" />
    </Box>
  );
};

export default AllProjects;
