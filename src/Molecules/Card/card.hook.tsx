import { useState } from 'react';

export const useProjectMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentProject, setCurrentProject] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

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
    setShowDropdown(false);
  };

  const handleOptionClick = (option: string) => {
    if (option === 'Change Status') {
      setShowDropdown((prev) => !prev);
    } else {
      console.log(`${option} selected for project: ${currentProject}`);
      setShowDropdown(false);
    }
  };

  return {
    anchorEl,
    currentProject,
    showDropdown,
    handleMenuOpen,
    handleMenuClose,
    handleOptionClick,
  };
};
