import Card from '../../Molecules/Card/Card';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';
import { ProjectData } from '../../Data/CardData';
import CountProjects from '../../Molecules/CountProjects/CountProjects';
import { StyledCardContainer, StyledCountBox } from './Project.style';

const CompletedProjects = () => {
  const projects = ProjectData || [];
  const completedProjects = projects.filter(
    (project) => project.status === 'Completed'
  );
  // const projects = useSelector((state: RootState) => state.projects.projects);
  return (
    <>
      <DashboardHeader />
      <StyledCountBox>
        <CountProjects status="complete" />
      </StyledCountBox>
      <StyledCardContainer>
        {/* <Card data={projects} buttonTitle={'open project'} /> */}
        <Card data={completedProjects} />
      </StyledCardContainer>
    </>
  );
};

export default CompletedProjects;
