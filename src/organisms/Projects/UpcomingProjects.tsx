import { Box } from '@mui/material';
import Card from '../../Molecules/Card/ProjectCard/Card';
import { ProjectStatus } from '../../store/reducers/projectDataSlice';

const UpcomeingProjets = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Card status={ProjectStatus.Upcoming} buttonTitle="Move to Live" />
    </Box>
  );
};

export default UpcomeingProjets;
