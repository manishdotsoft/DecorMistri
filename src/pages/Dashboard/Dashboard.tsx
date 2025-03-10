import { Box } from '@mui/material';
import { BoxContainer, LoaderWrapper } from './Dashboard.style';
import Card from '../../Molecules/Card/Card';
import Loader from '../../atoms/Loader/Loader';
import { useDashboardLogic } from './Dashboard.hook';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';
import CountProjects from '../../Molecules/CountProjects/CountProjects';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { loading } = useDashboardLogic();
  const projects = useSelector((state: RootState) => state.projects.projects);

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
