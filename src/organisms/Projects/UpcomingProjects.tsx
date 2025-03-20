import Card from '../../Molecules/Card/Card';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';
import { ProjectData } from '../../Data/CardData';
import CountProjects from '../../Molecules/CountProjects/CountProjects';
import { StyledCardContainer, StyledCountBox } from './Project.style';

const UpcomeingProjets = () => {
  // const projects = useSelector((state: RootState) => state.projects.projects);
  const projects = ProjectData || [];
  const upcomingProjects = projects.filter(
    (project) => project.status === 'Upcoming'
  );
  return (
    <>
      <DashboardHeader />
      <StyledCountBox>
        <CountProjects status="upcoming" />
      </StyledCountBox>
      <StyledCardContainer>
        {/* <Card data={projects} buttonTitle={'open project'} /> */}
        <Card data={upcomingProjects} />
      </StyledCardContainer>
    </>
  );
};

export default UpcomeingProjets;
