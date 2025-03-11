import { Box } from '@mui/material';

import Card from '../../Molecules/Card/Card';
import Loader from '../../atoms/Loader/Loader';
import { useDashboardLogic } from './Dashboard.hook';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';
import CountProjects from '../../Molecules/CountProjects/CountProjects';
import { BoxContainer } from './Dashboard.style';
import { ProjectData } from '../../Data/CardData';

const Dashboard = () => {
  const { loading } = useDashboardLogic();
  const projects = ProjectData || [];

  return (
    <Box>
      {loading ? (
        <Loader message="" size={'large'} />
      ) : (
        <>
          <DashboardHeader title="Dashboard" />
          <BoxContainer>
            <CountProjects />
            <Box
              sx={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Card
                data={projects}
                buttonTitle={'Move to live'}
                sx={{ width: '100%' }}
              />
            </Box>
          </BoxContainer>
        </>
      )}
    </Box>
  );
};

export default Dashboard;
