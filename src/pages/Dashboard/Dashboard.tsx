import { Box, Divider } from '@mui/material';
import {
  Divider as Drivider,
  HeadingItem,
  BoxItem,
  BoxContainer,
  Titel,
  Cards,
} from './Dashboard.styel';
import HeaderFilter from '../../organisms/Header/HeaderFilter';
import ProjectCard from '../../Molecules/Card/ProjectCard/Card';
import { ProjectStatus } from '../../store/reducers/projectDataSlice';
import Loader from '../../atoms/Loader/Loader';
import { useDashboardLogic } from './Dashboard.hook';

const Dashboard = () => {
  const { loading } = useDashboardLogic();

  return (
    <Box sx={{ padding: 4 }}>
      <Titel variant="h4">Project Dashboard</Titel>
      <HeaderFilter />
      <Drivider />
      {loading ? (
        <Loader message="" size={'large'} />
      ) : (
        <BoxContainer>
          <BoxItem>
            <Cards>
              <HeadingItem variant="h6">Live Project</HeadingItem>
            </Cards>
            <ProjectCard
              status={ProjectStatus.Live}
              buttonTitle="OPEN PROJECT"
            />
          </BoxItem>
          <Divider />
          <BoxItem>
            <Cards>
              <HeadingItem variant="h6">Upcoming Project</HeadingItem>
            </Cards>
            <ProjectCard
              status={ProjectStatus.Upcoming}
              buttonTitle="Move to Live"
            />
          </BoxItem>
          <Divider />
          <BoxItem>
            <Cards>
              <HeadingItem variant="h6">Completed Project</HeadingItem>
            </Cards>
            <ProjectCard
              status={ProjectStatus.Complete}
              buttonTitle="Detail View"
            />
          </BoxItem>
          <Divider />
          <BoxItem>
            <Cards>
              <HeadingItem variant="h6">Not Confirmed</HeadingItem>
            </Cards>
            <ProjectCard
              status={ProjectStatus.NotConfirmed}
              buttonTitle="Update Status"
            />
          </BoxItem>
        </BoxContainer>
      )}
    </Box>
  );
};

export default Dashboard;
