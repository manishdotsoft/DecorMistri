import { Box, Typography } from '@mui/material';
import LiveProjectCard from '../../Molecules/Card/LiveProjectCard';
import NotConfirmedCard from '../../Molecules/Card/NotConfirmed';
import UpcomeingProjetsCard from '../../Molecules/Card/UpcomingProject';
import CompleteProjectCard from '../../Molecules/Card/CompletedProject';
import { Divider, HeadingItem, BoxItem, BoxContainer } from './Dashboard.styel';
import HeaderFilter from '../../organisms/Header/HeaderFilter';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', marginBottom: 4, fontWeight: 600 }}
        component="h1"
      >
        Project Dashboard
      </Typography>

      <HeaderFilter />

      <Box
        sx={{
          background: 'grey',
          height: '1px',
          display: 'flex',
          flexDirection: 'row',
          mb: '20px',
        }}
      ></Box>

      <BoxContainer>
        <BoxItem>
          <Box sx={{ mb: '15px' }}>
            <HeadingItem variant="h6">Live Project</HeadingItem>
          </Box>
          <LiveProjectCard />
        </BoxItem>
        <Divider />
        <BoxItem>
          <Box sx={{ mb: '15px' }}>
            <HeadingItem variant="h6">Upcoming Project</HeadingItem>
          </Box>
          <UpcomeingProjetsCard />
        </BoxItem>
        <Divider />
        <BoxItem>
          <Box sx={{ mb: '15px' }}>
            <HeadingItem variant="h6">Completed Project</HeadingItem>
          </Box>
          <CompleteProjectCard />
        </BoxItem>
        <Divider />
        <BoxItem>
          <Box sx={{ mb: '15px' }}>
            <HeadingItem variant="h6">Not Confirmed</HeadingItem>
          </Box>
          <NotConfirmedCard />
        </BoxItem>
      </BoxContainer>
    </Box>
  );
};

export default Dashboard;
