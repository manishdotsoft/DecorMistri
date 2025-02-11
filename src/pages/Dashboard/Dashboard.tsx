import { Box } from '@mui/material';
import {
  Divider,
  // HeadingItem,
  // BoxItem,
  BoxContainer,
  // Cards,
  // DividerColumn,
} from './Dashboard.styel';

import Card from '../../Molecules/Card/Card';
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
          <Card data={projects} buttonTitle={'Move to live'} />
        </BoxContainer>
      )}
    </Box>
  );
};

export default Dashboard;
