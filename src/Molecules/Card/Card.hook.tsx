import { useTheme } from '@mui/material';
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

  const theme = useTheme();

  const color: Record<string, string> = {
    Live: theme?.palette?.rateSheduleColors?.colorD,
    Upcoming: theme?.palette?.warning?.upcoming,
    Completed: theme?.palette?.primary?.success,
    NotConfirmed: theme?.palette?.rateSheduleColors?.bookedOut,
  };

  const [borderColor, setBorderColor] = useState('');

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    project: Project
  ) => {
    console.log(project);
    setBorderColor(color[project?.status]);
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
    borderColor,
  };
};
