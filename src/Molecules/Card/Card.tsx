import React from 'react';
import { Box, Typography, useTheme, Divider } from '@mui/material';

import ProjectMenu from './Menu';
import Button from '../../atoms/Button/Button';
import {
  ButtonWrapper,
  CardContainer,
  CardDetailWrapper,
  CardHeader,
  CompletionBar,
  CompletionBarContainer,
  CompletionBarFill,
  CompletionPercentage,
  LabelText,
  MoreButton,
  ProjectCard,
  SizeBox,
  StyledAvatar,
  StyledMoreIcon,
  ValueText,
} from './Card.style';
import { useCardLogic } from './Card.hook';
import { getCardStyle } from './cardUtils';

interface Project {
  id: number;
  name: string;
  designType: string;
  location: string;
  status: 'Live' | 'Upcoming' | 'Completed' | 'NotConfirmed';
  startDate: string;
  endDate: string;
  completionPercentage: number;
  ownerImage?: string;
}

interface ProjectCardProps {
  data: Project[];
  cardStyle?: React.CSSProperties;
}

const CardGrid: React.FC<ProjectCardProps> = ({ data }) => {
  const theme = useTheme();

  const {
    menuState,
    handleMenuClick,
    handleMenuClose,
    handleButtonClick,
    borderColor,
  } = useCardLogic();

  return (
    <CardContainer>
      {data.length > 0 ? (
        data.map((project) => {
          const projectCardStyle = getCardStyle(project.status, theme);

          const CardDetails = [
            { label: 'Name', value: project.name },
            { label: 'Design Type', value: project.designType },
            { label: 'Location', value: project.location },
            {
              label: 'Size',
              value: (
                <>
                  1300 <SizeBox>sq.ft.</SizeBox>
                </>
              ),
            },
            {
              label: 'Completion',
              value: (
                <CompletionBarContainer>
                  <CompletionBar>
                    <CompletionBarFill
                      fillColor={projectCardStyle.buttonBgColor}
                      completionPercentage={project.completionPercentage}
                    />
                  </CompletionBar>
                  <CompletionPercentage color={projectCardStyle.buttonBgColor}>
                    {project.completionPercentage}%
                  </CompletionPercentage>
                </CompletionBarContainer>
              ),
            },
            {
              label: 'Date',
              value: `${project.startDate} to ${project.endDate}`,
            },
          ];

          return (
            <Box key={project.id}>
              <ProjectCard borderColor={projectCardStyle.borderColor}>
                {/* Header */}
                <CardHeader>
                  <Typography fontWeight="bold">{project?.heading}</Typography>

                  <MoreButton
                    aria-label="more"
                    onClick={(event) => handleMenuClick(event, project)}
                  >
                    <StyledMoreIcon color={projectCardStyle.borderColor} />
                  </MoreButton>
                </CardHeader>

                {/* Menu */}
                <ProjectMenu
                  anchorEl={menuState.anchorEl}
                  open={Boolean(menuState.anchorEl)}
                  onClose={handleMenuClose}
                  borderColor={borderColor}
                  menuItems={[
                    'Edit',
                    'Change Status',
                    'Add Phase',
                    'Add Task',
                    'Delete Project',
                  ]}
                  currentProject={
                    menuState.selectedProject?.id?.toString() || null
                  }
                  onDeleteProject={() => {
                    if (menuState.selectedProject) {
                      console.log(
                        `Deleting project with ID: ${menuState.selectedProject.id}`
                      );
                    }
                  }}
                  onUpdateStatus={() => {
                    if (menuState.selectedProject) {
                      console.log(
                        `Updating status of project ID: ${menuState.selectedProject.id}`
                      );
                    }
                  }}
                  projectId={menuState.selectedProject?.id ?? null}
                />

                {/* Project Details */}
                <Box>
                  {CardDetails.map(({ label, value }) => (
                    <CardDetailWrapper key={label}>
                      <LabelText>{label}</LabelText>
                      <ValueText>{value}</ValueText>
                    </CardDetailWrapper>
                  ))}
                </Box>

                <Divider />

                {/* Action Button */}
                <ButtonWrapper>
                  <StyledAvatar
                    src={project.ownerImage || ''}
                    alt="Owner Image"
                  />
                  <Button
                    title={projectCardStyle.title}
                    onClick={handleButtonClick}
                    variant="outlined"
                    style={{
                      borderRadius: '6px',
                      border: `1px solid ${projectCardStyle.buttonBgColor}`,
                      color: projectCardStyle.ButtonColor,
                      fontWeight: 'bold',
                      width: '120px',
                    }}
                  />
                </ButtonWrapper>
              </ProjectCard>
            </Box>
          );
        })
      ) : (
        <Typography>No projects available.</Typography>
      )}
    </CardContainer>
  );
};

export default CardGrid;
