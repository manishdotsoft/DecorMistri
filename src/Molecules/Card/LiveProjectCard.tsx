import React, { useState } from 'react';
import { useProjectMenu } from './card.hook';
import ProjectCard from './ProjectCard/projectCard';
import ProjectMenu from './ThreeDotMenu/Menu';
import { menuItems } from '../../Data/CardData';
import { ProjectData } from '../../Data/CardData';

const LiveProject: React.FC = () => {
  const [projectData, setProjectData] = useState(
    ProjectData.filter((project) => project.status === 'Live')
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
    // Filter out the project from live data and update the state
    setProjectData((prevData) =>
      prevData.filter((project) => project.value !== projectValue)
    );
  };

  const handleUpdateStatus = (projectValue: string, newStatus: string) => {
    // Update the status and move the project to the corresponding section
    setProjectData((prevData) =>
      prevData.map((project) =>
        project.value === projectValue
          ? { ...project, status: newStatus } // Update project status
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
          buttonTitle="Move to Complete" // Change title based on the action
          buttonColor="primary" // You can change color based on action
          buttonAction={() => handleUpdateStatus(project.value, 'Complete')} // Update project status
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
        onUpdateStatus={handleUpdateStatus}
      />
    </>
  );
};

export default LiveProject;
