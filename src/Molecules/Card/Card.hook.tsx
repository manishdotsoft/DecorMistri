import { useState } from 'react';

interface Project {
  id: number;
  completionPercentage: number;
  designType: string;
  endDate: string;
  location: string;
  startDate: string;
  status: string;
  value: string;
  projectId: number;
}

export const useCardLogic = () => {
  const [menuState, setMenuState] = useState<{
    anchorEl: HTMLElement | null;
    selectedProject: Project | null;
  }>({
    anchorEl: null,
    selectedProject: null,
  });

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    project: Project
  ) => {
    setMenuState({ anchorEl: event.currentTarget, selectedProject: project });
  };

  const handleMenuClose = () => {
    setMenuState({ anchorEl: null, selectedProject: null });
  };

  const handleButtonClick = () => {};

  return {
    menuState,
    handleMenuClick,
    handleMenuClose,
    handleButtonClick,
  };
};
