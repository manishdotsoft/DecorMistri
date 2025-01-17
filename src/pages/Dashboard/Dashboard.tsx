import { Box } from '@mui/material';
import LiveProjectCard from '../../Molecules/Card/LiveProjectCard';
import NotConfirmedCard from '../../Molecules/Card/NotConfirmed';
import UpcomeingProjetsCard from '../../Molecules/Card/UpcomingProject';
import CompleteProjectCard from '../../Molecules/Card/CompletedProject';
import {
  Divider,
  HeadingItem,
  BoxItem,
  BoxContainer,
  Drivider,
  Titel,
  Cards,
} from './Dashboard.styel';
import HeaderFilter from '../../organisms/Header/HeaderFilter';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Titel variant="h4">Project Dashboard</Titel>

      <HeaderFilter />

      <Drivider></Drivider>

      <BoxContainer>
        <BoxItem>
          <Cards>
            <HeadingItem variant="h6">Live Project</HeadingItem>
          </Cards>
          <LiveProjectCard />
        </BoxItem>
        <Divider />
        <BoxItem>
          <Cards>
            <HeadingItem variant="h6">Upcoming Project</HeadingItem>
          </Cards>
          <UpcomeingProjetsCard />
        </BoxItem>
        <Divider />
        <BoxItem>
          <Cards>
            <HeadingItem variant="h6">Completed Project</HeadingItem>
          </Cards>
          <CompleteProjectCard />
        </BoxItem>
        <Divider />
        <BoxItem>
          <Cards>
            <HeadingItem variant="h6">Not Confirmed</HeadingItem>
          </Cards>
          <NotConfirmedCard />
        </BoxItem>
      </BoxContainer>
    </Box>
  );
};

export default Dashboard;
