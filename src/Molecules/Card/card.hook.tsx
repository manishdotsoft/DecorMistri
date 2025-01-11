import { useState } from 'react';

export const useProjectMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentProject, setCurrentProject] = useState<string | null>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    projectValue: string
  ) => {
    setAnchorEl(event.currentTarget);
    setCurrentProject(projectValue);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentProject(null);
  };

  const handleOptionClick = (option: string) => {
    if (currentProject) {
      console.log(`${option} selected for project: ${currentProject}`);
    }
    handleMenuClose();
  };

  return {
    anchorEl,
    currentProject,
    handleMenuOpen,
    handleMenuClose,
    handleOptionClick,
  };
};
