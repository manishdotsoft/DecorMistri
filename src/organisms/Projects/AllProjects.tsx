import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Card from '../../Molecules/Card/ProjectCard/Card';

// import { Divider } from '../../pages/Dashboard/Dashboard.styel';

const AllProjects = () => {
  const projects = useSelector((state: RootState) => state.projects.projects);
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <Card data={projects} />
    </Box>
  );
};

export default AllProjects;
