import { Box, Grid, Typography } from '@mui/material';
import {
  Divider,
  BoxContainer,
  LoaderWrapper,
  // ProjectHeading,
} from './Dashboard.styel';
import Loader from '../../atoms/Loader/Loader';
import { useDashboardLogic } from './Dashboard.hook';
import LiveProjects from '../../organisms/Projects/LiveProject';

const Dashboard = () => {
  const { loading } = useDashboardLogic();

  return (
    <Box>
      <Divider />
      {loading ? (
        <LoaderWrapper>
          <Loader message="" size={'large'} />
        </LoaderWrapper>
      ) : (
        <BoxContainer>
          <Grid container spacing={2} alignItems="stretch">
            {/* Live Projects */}
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="h6">Live Projects</Typography>
                <LiveProjects />
              </Box>
            </Grid>

            {/* Divider */}
            <Divider />

            {/* Upcoming Projects */}
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="h6">Upcoming Projects</Typography>
                {/* <UpcomingProjects /> */}
              </Box>
            </Grid>

            {/* Divider */}
            <Divider />

            {/* Completed Projects */}
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="h6">Completed Projects</Typography>
                {/* <CompletedProjects /> */}
              </Box>
            </Grid>

            {/* Divider */}
            <Divider />

            {/* Not Confirmed Projects */}
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="h6">Not Confirmed</Typography>
                {/* <NotConfirmedProjects /> */}
              </Box>
            </Grid>
          </Grid>
        </BoxContainer>
      )}
    </Box>
  );
};

export default Dashboard;
