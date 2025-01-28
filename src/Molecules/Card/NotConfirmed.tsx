import React, { useState } from 'react';
import { useProjectMenu } from './card.hook';
import ProjectCard from './ProjectCard/projectCard';
import ProjectMenu from './ThreeDotMenu/Menu';
import { menuItems } from '../../Data/CardData';
import { ProjectData } from '../../Data/CardData';

const NotConfirmedCard: React.FC = () => {
  const [projectData, setProjectData] = useState(
    ProjectData.filter((project) => project.status === 'NotConfirmed')
  );
  const {
    anchorEl,
    currentProject,
    showDropdown,
    handleMenuOpen,
    handleMenuClose,
    handleOptionClick,
  } = useProjectMenu();

  const handleDeleteProject = (projectValue: string) => {
    setProjectData((prevData) =>
      prevData.filter((project) => project.value !== projectValue)
    );
  };

  const handleStatusChange = (projectValue: string, newStatus: string) => {
    setProjectData((prevData) =>
      prevData.map((project) =>
        project.value === projectValue
          ? { ...project, status: newStatus }
          : project
      )
    );
  };

  return (
    <>
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          menuItems={menuItems}
          onMenuOpen={handleMenuOpen}
          onMenuClose={handleMenuClose}
          onMenuOptionClick={handleOptionClick}
          menuAnchorEl={anchorEl}
          buttonTitle="Update Status"
          buttonColor="secondary"
          buttonAction={() =>
            handleStatusChange(project.value, 'UpdatedStatus')
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
        onUpdateStatus={handleOptionClick}
      />
    </>
  );
};

export default NotConfirmedCard;
