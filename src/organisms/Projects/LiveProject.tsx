import { Box } from '@mui/material';
import Card from '../../Molecules/Card/ProjectCard/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const LiveProjects = () => {
  const projects = useSelector((state: RootState) => state.projects.projects);
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Card data={projects} />
    </Box>
  );
};

export default LiveProjects;
