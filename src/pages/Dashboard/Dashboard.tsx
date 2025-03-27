import { Box } from '@mui/material';
import Card from '../../Molecules/Card/Card';
import Loader from '../../atoms/Loader/Loader';
import { useDashboardLogic } from './Dashboard.hook';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';
import CountProjects from '../../Molecules/CountProjects/CountProjects';
import {
  BoxContainer,
  CardContaier,
  ProjectBox,
  LoadingWrapper,
} from './Dashboard.style';
import { ProjectData } from '../../Data/CardData';

const Dashboard = () => {
  const { loading } = useDashboardLogic();
  const projects = ProjectData || [];

  // Group projects by status
  const liveProjects = projects.filter((project) => project.status === 'Live');
  const upcomingProjects = projects.filter(
    (project) => project.status === 'Upcoming'
  );
  const completedProjects = projects.filter(
    (project) => project.status === 'Completed'
  );
  const notConfirmedProjects = projects.filter(
    (project) => project.status === 'NotConfirmed'
  );

  return (
    <Box>
      {loading ? (
        <LoadingWrapper>
          <Loader message="" size={'large'} />
        </LoadingWrapper>
      ) : (
        <>
          <DashboardHeader />

          <BoxContainer>
            <CountProjects />

            <ProjectBox>
              {/* Live Projects */}
              {liveProjects.length > 0 && (
                <CardContaier>
                  <Card data={liveProjects} />
                </CardContaier>
              )}

              {/* Upcoming Projects */}
              {upcomingProjects.length > 0 && (
                <CardContaier>
                  <Card data={upcomingProjects} />
                </CardContaier>
              )}

              {/* Completed Projects */}
              {completedProjects.length > 0 && (
                <CardContaier>
                  <Card data={completedProjects} />
                </CardContaier>
              )}

              {/* Not Confirmed Projects */}
              {notConfirmedProjects.length > 0 && (
                <CardContaier>
                  <Card data={notConfirmedProjects} />
                </CardContaier>
              )}
            </ProjectBox>
          </BoxContainer>
        </>
      )}
    </Box>
  );
};

export default Dashboard;
