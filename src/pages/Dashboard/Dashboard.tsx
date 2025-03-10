import { Box } from '@mui/material';
import { BoxContainer } from './Dashboard.styel';

import Card from '../../Molecules/Card/Card';
import Loader from '../../atoms/Loader/Loader';
import { useDashboardLogic } from './Dashboard.hook';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';
import CountProjects from '../../Molecules/CountProjects/CountProjects';

const Dashboard = () => {
  const { loading, projects } = useDashboardLogic();

  return (
    <Box>
      {loading ? (
        <Loader message="" size={'large'} />
      ) : (
        <>
          <DashboardHeader title="Dashboard" />
          <BoxContainer>
            <CountProjects />
            <Card data={projects} buttonTitle={'Move to live'} />
          </BoxContainer>
        </>
      )}
    </Box>
  );
};

export default Dashboard;
