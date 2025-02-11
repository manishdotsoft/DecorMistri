import { Box } from '@mui/material';
import Card from '../../Molecules/Card/ProjectCard/Card';
import { ProjectStatus } from '../../store/reducers/projectDataSlice';

import { Divider } from '../../pages/Dashboard/Dashboard.styel';

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
      <Divider />
      <Card status={ProjectStatus.Upcoming} buttonTitle="Move to Live" />
    </Box>
  );
};

export default UpcomeingProjets;
