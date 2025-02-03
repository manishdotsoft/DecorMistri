import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '../../../atoms/Button/Button';

import {
  CardContent,
  Typography,
  LinearProgress,
  IconButton,
} from '@mui/material';
import {
  ButtonBox,
  CardContainer,
  HeadingTitle,
  SuccessStatus,
} from '../Card.styel';
import ProjectMenu from '../ThreeDotMenu/Menu';
import { ProjectStatus } from '../../../store/reducers/projectDataSlice';
import palette from '../../../thems/primitives/palette';

interface ProjectCardProps {
  project: {
    value: string;
    designType: string;
    location: string;
    startDate: string;
    endDate: string;
    completionPercentage: number;
    status: string;
  };
  menuItems: string[];
  onMenuOpen: (
    event: React.MouseEvent<HTMLButtonElement>,
    projectValue: string
  ) => void;
  onMenuClose: () => void;
  onMenuOptionClick: (option: string) => void;
  menuAnchorEl: HTMLElement | null;
  buttonTitle: string;
  buttonColor?: 'primary' | 'secondary' | 'default';
  buttonAction: () => void;
  onUpdateStatus?: (projectValue: string, newStatus: ProjectStatus) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  menuItems,
  onMenuOpen,
  onMenuClose,
  onMenuOptionClick,
  menuAnchorEl,
  buttonTitle,

  buttonAction,
  onUpdateStatus,
}) => {
  const progressLabel =
    project.completionPercentage === 0
      ? 'Not Started'
      : `${project.completionPercentage}% Completed`;

  const handleStatusChange = (status: ProjectStatus) => {
    if (onUpdateStatus) {
      onUpdateStatus(project.value, status);
    }
  };

  return (
    <CardContainer>
      <CardContent>
        <HeadingTitle variant="h6">
          {project.value}
          <IconButton
            sx={{ cursor: 'pointer' }}
            onClick={(e) => onMenuOpen(e, project.value)}
          >
            <MoreHorizIcon />
          </IconButton>
        </HeadingTitle>
        <Typography variant="body2" color="text.secondary">
          Design Type: {project.designType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {project.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Start Date: {project.startDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          End Date: {project.endDate}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={project.completionPercentage}
          sx={{ marginTop: 2 }}
        />

        <SuccessStatus isStarted={project.completionPercentage > 0}>
          {progressLabel}
        </SuccessStatus>
      </CardContent>

      <ButtonBox>
        <Button
          title={buttonTitle}
          variant="contained"
          style={{
            width: '180px',
            borderRadius: '6px',
            backgroundColor: palette.decor.main,
          }}
          onClick={buttonAction}
        />
      </ButtonBox>

      <ProjectMenu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        showDropdown={false}
        onClose={onMenuClose}
        onOptionClick={onMenuOptionClick}
        menuItems={menuItems}
        onDeleteProject={onMenuClose}
        onStatusChange={handleStatusChange}
      />
    </CardContainer>
  );
};

export default ProjectCard;
