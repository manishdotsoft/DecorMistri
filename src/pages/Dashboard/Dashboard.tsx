import { Box } from '@mui/material';
import {
  Divider,
  HeadingItem,
  BoxItem,
  BoxContainer,
  Cards,
  DividerColumn,
} from './Dashboard.styel';

import ProjectCard from '../../Molecules/Card/ProjectCard/Card';
import { ProjectStatus } from '../../store/reducers/projectDataSlice';

const Dashboard = () => {
  return (
    <Box>
      <Divider />
      <BoxContainer>
        <BoxItem>
          <Cards>
            <HeadingItem variant="h6">Live </HeadingItem>
          </Cards>
          <ProjectCard status={ProjectStatus.Live} buttonTitle="Open Project" />
        </BoxItem>
        <DividerColumn />
        <BoxItem>
          <Cards>
            <HeadingItem variant="h6">Upcoming </HeadingItem>
          </Cards>
          <ProjectCard
            status={ProjectStatus.Upcoming}
            buttonTitle="Move to Live"
          />
        </BoxItem>
        <DividerColumn />

        <BoxItem>
          <Cards>
            <HeadingItem variant="h6">Completed </HeadingItem>
          </Cards>
          <ProjectCard
            status={ProjectStatus.Complete}
            buttonTitle="Detail View"
          />
        </BoxItem>
        <DividerColumn />

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
    </Box>
  );
};

export default Dashboard;
