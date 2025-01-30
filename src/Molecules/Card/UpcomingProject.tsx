import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  setProjects,
  updateProjectStatus,
} from '../../store/reducers/projectDataSlice';
import { RootState } from '../../store/store';

import { useProjectMenu } from './card.hook';
import ProjectCard from './ProjectCard/projectCard';
import ProjectMenu from './ThreeDotMenu/Menu';
import { menuItems } from '../../Data/CardData';

import { ProjectData } from '../../Data/CardData';
import { ProjectStatus } from '../../store/reducers/projectDataSlice';

const UpcomingProjectCard: React.FC = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) =>
    state.projects.projects.filter(
      (project) => project.status === ProjectStatus.Upcoming
    )
  );
  useEffect(() => {
    dispatch(setProjects(ProjectData));
  }, [dispatch]);

  const {
    anchorEl,
    currentProject,
    showDropdown,
    handleMenuOpen,
    handleMenuClose,
    handleOptionClick,
  } = useProjectMenu();
  const handleUpdateStatus = (
    projectValue: string,
    newStatus: ProjectStatus
  ) => {
    dispatch(updateProjectStatus({ projectValue, newStatus }));
  };

  const handleDeleteProject = (projectValue: string) => {
    console.log('Delete project:', projectValue);
  };

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          menuItems={['Change Status', 'Delete Project']}
          onMenuOpen={handleMenuOpen}
          onMenuClose={handleMenuClose}
          onMenuOptionClick={(option) => {
            if (option === 'Change Status') {
              handleUpdateStatus(project.value, ProjectStatus.Live);
            }
          }}
          menuAnchorEl={anchorEl}
          buttonTitle="OPEN PROJECT"
          buttonColor="primary"
          buttonAction={() =>
            handleUpdateStatus(project.value, ProjectStatus.Live)
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
        onDeleteProject={handleDeleteProject}
        currentProject={currentProject}
        onUpdateStatus={(projectValue, newStatus) =>
          handleUpdateStatus(projectValue, newStatus as ProjectStatus)
        }
      />
    </>
  );
};

export default UpcomingProjectCard;
