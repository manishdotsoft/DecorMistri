import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProjects,
  updateProjectStatus,
} from '../../../store/reducers/projectDataSlice';
import { RootState } from '../../../store/store';
import { useProjectMenu } from '../card.hook';
import ProjectCard from '../ProjectCard/projectCard';
import ProjectMenu from '../ThreeDotMenu/Menu';
import { menuItems } from '../../../Data/CardData';
import { ProjectData } from '../../../Data/CardData';
import { ProjectStatus } from '../../../store/reducers/projectDataSlice';

interface ProjectCardProps {
  status: ProjectStatus;
  buttonTitle: string;
}

const Card: React.FC<ProjectCardProps> = ({ status, buttonTitle }) => {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) =>
    state.projects.projects.filter((project) => project.status === status)
  );

  useEffect(() => {
    dispatch(setProjects(ProjectData));
  }, [dispatch]);

  const handleUpdateStatus = (
    projectValue: string,
    newStatus: ProjectStatus
  ) => {
    dispatch(updateProjectStatus({ projectValue, newStatus }));
  };

  const {
    anchorEl,
    currentProject,
    showDropdown,
    handleMenuOpen,
    handleMenuClose,
    handleOptionClick,
  } = useProjectMenu(handleUpdateStatus);

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          menuItems={['Change Status', 'Delete Project']}
          onMenuOpen={handleMenuOpen}
          onMenuClose={handleMenuClose}
          onMenuOptionClick={handleOptionClick}
          menuAnchorEl={anchorEl}
          buttonTitle={buttonTitle}
          buttonColor="primary"
          buttonAction={() =>
            handleUpdateStatus(project.value, ProjectStatus.Complete)
          }
        />
      ))}

      <ProjectMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onOptionClick={handleOptionClick}
        menuItems={menuItems}
        showDropdown={showDropdown}
        onDeleteProject={() => console.log('Delete project:', currentProject)}
        currentProject={currentProject}
        onUpdateStatus={handleUpdateStatus}
      />
    </>
  );
};

export default Card;
