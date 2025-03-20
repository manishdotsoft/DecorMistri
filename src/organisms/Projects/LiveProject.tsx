import { ProjectData } from '../../Data/CardData';
import Card from '../../Molecules/Card/Card';
import CountProjects from '../../Molecules/CountProjects/CountProjects';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';

import { StyledCardContainer, StyledCountBox } from './Project.style';

const LiveProjects = () => {
  // const projects = useSelector((state: RootState) => state.projects.projects);
  const projects = ProjectData || [];
  const liveProjects = projects.filter((project) => project.status === 'Live');

  return (
    <>
      <DashboardHeader />
      <StyledCountBox>
        <CountProjects status="Live" />
      </StyledCountBox>
      <StyledCardContainer>
        {/* <Card data={projects} buttonTitle={'open project'} /> */}
        <Card data={liveProjects} />
      </StyledCardContainer>
    </>
  );
};

export default LiveProjects;
