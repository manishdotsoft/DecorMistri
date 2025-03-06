import Card from '../../Molecules/Card/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Box } from '@mui/material';

const LiveProjects = () => {
  const projects = useSelector((state: RootState) => state.projects.projects);
  return (
    <Box sx={{ padding: '16px 0px' }}>
      <Card
        data={projects}
        buttonTitle={'open project'}
        cardWrapperStyle={{ flexDirection: 'column' }}
      />
    </Box>
  );
};

export default LiveProjects;
