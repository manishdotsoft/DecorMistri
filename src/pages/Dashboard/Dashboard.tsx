import { Box } from '@mui/material';
import {
  Divider,
  // HeadingItem,
  // BoxItem,
  BoxContainer,
  // Cards,
  // DividerColumn,
} from './Dashboard.styel';

import ProjectCard from '../../Molecules/Card/ProjectCard/Card';
// import { ProjectStatus } from '../../store/reducers/projectDataSlice';
import Loader from '../../atoms/Loader/Loader';
import { useDashboardLogic } from './Dashboard.hook';

const Dashboard = () => {
  const { loading, projects } = useDashboardLogic();

  return (
    <Box>
      <Divider />
      {loading ? (
        <Loader message="" size={'large'} />
      ) : (
        <BoxContainer>
          <ProjectCard data={projects} />
        </BoxContainer>
      )}
    </Box>
  );
};

export default Dashboard;
