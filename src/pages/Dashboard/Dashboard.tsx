import { Box } from '@mui/material';
import { BoxContainer } from './Dashboard.styel';

import Card from '../../Molecules/Card/Card';
import Loader from '../../atoms/Loader/Loader';
import { useDashboardLogic } from './Dashboard.hook';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';
import CountProjects from '../../Molecules/CountProjects/CountProjects';

const Dashboard = () => {
  const { loading } = useDashboardLogic();

  return (
    <Box>
      {loading ? (
        <LoaderWrapper>
          <Loader message="" size={'large'} />
        </LoaderWrapper>
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
