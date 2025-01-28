import React, { useState } from 'react';
import { useProjectMenu } from './card.hook';
import ProjectCard from './ProjectCard/projectCard';
import ProjectMenu from './ThreeDotMenu/Menu';
import { menuItems } from '../../Data/CardData';
import { NotConfirmedProjectData } from '../../Data/CardData';

const NotConfirmedCard: React.FC = () => {
  const [projectData, setProjectData] = useState(NotConfirmedProjectData);
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
          buttonTitle="Move to Live"
          buttonColor="secondary"
          buttonAction={() => console.log(`Moving ${project.value} to Live`)}
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
