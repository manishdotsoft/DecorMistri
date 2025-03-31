import React, { useState } from 'react';
import { Box, Typography, useTheme, Divider } from '@mui/material';

import ProjectMenu from './Menu';
import Button from '../../atoms/Button/Button';
import Modal from '../../atoms/Modal/Modal';
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
  TitleOne,
  ValueText,
} from './Card.style';
import { useCardLogic } from './Card.hook';
import { getCardStyle } from './cardUtils';

interface Project {
  id: number;
  name: string;
  designType: string;
  location: string;
  status: string;
  startDate: string;
  endDate: string;
  completionPercentage: number;
  ownerImage?: string;
}

interface ProjectCardProps {
  data: Project[];
}

interface ModalConfig {
  status: string;
  message: string;
  buttons: string[];
}

const CardGrid: React.FC<ProjectCardProps> = ({ data }) => {
  const theme = useTheme();
  const [modalConfig, setModalConfig] = useState<ModalConfig | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { menuState, handleMenuClick, handleMenuClose, borderColor } =
    useCardLogic();

  const handleButtonClick = (project: Project) => {
    setSelectedProject(project);
    const modalDetails: Record<string, ModalConfig> = {
      Live: {
        status: project.status,
        message: 'Are you sure to open project ?',
        buttons: ['Skip', 'Open Project'],
      },
      Upcoming: {
        status: project.status,
        message: 'Are you sure to move to live project ?',
        buttons: ['Cancel', 'Move to Live'],
      },
      Completed: {
        status: project.status,
        message: 'Are you sure to open project details ?',
        buttons: ['Cancel', 'Open Project'],
      },
      NotConfirmed: {
        status: project.status,
        message: 'Are you sure to update status ?',
        buttons: ['Cancel', 'Update Status'],
      },
    };
    setModalConfig(modalDetails[project.status] || null);
  };

  const closeModal = () => {
    setModalConfig(null);
    setSelectedProject(null);
  };

  return (
    <CardContainer>
      {data.length > 0 ? (
        data.map((project) => {
          const projectCardStyle = getCardStyle(project.status, theme);

          return (
            <Box key={project.id}>
              <ProjectCard bordercolor={projectCardStyle.borderColor}>
                {/* Header */}
                <CardHeader>
                  <TitleOne>{project.name}</TitleOne>
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
                  status={project.status}
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
                  onDeleteProject={() =>
                    console.log(
                      `Deleting project with ID: ${menuState.selectedProject?.id}`
                    )
                  }
                  onUpdateStatus={() =>
                    console.log(
                      `Updating status of project ID: ${menuState.selectedProject?.id}`
                    )
                  }
                  projectId={menuState.selectedProject?.id ?? null}
                />

                {/* Project Details */}
                <Box>
                  {[
                    { label: 'Name', value: project.name },
                    { label: 'Design Type', value: project.designType },
                    { label: 'Location', value: project.location },
                    {
                      label: 'Size',
                      value: (
                        <>
                          {1300} <SizeBox>sq.ft.</SizeBox>
                        </>
                      ),
                    },
                    {
                      label: 'Completion',
                      value: (
                        <CompletionBarContainer>
                          <CompletionBar>
                            <CompletionBarFill
                              style={{
                                width: `${project.completionPercentage}%`,
                                backgroundColor:
                                  projectCardStyle.completionColor,
                              }}
                            />
                          </CompletionBar>
                          <CompletionPercentage
                            color={projectCardStyle.buttonBgColor}
                          >
                            {project.completionPercentage}%
                          </CompletionPercentage>
                        </CompletionBarContainer>
                      ),
                    },
                    {
                      label: 'Date',
                      value: `${project.startDate} to ${project.endDate}`,
                    },
                  ].map(({ label, value }) => (
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
                    onClick={() => handleButtonClick(project)}
                    buttonFontSize={theme.typography.subtitle2.fontSize}
                    variant="outlined"
                    style={{
                      borderRadius: '6px',
                      border: `1px solid ${projectCardStyle.buttonBgColor}`,
                      color: projectCardStyle.ButtonColor,
                      fontWeight: 'bold',
                      width: '113px',
                      cursor: 'pointer',
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

      {modalConfig && selectedProject && (
        <Modal open={true} onClose={closeModal} title={modalConfig.message}>
          <Typography variant="body1">{modalConfig.message}</Typography>
          <Box display="flex" justifyContent="center" gap="10px" mt={2}>
            <Button
              title={modalConfig.buttons[0]}
              buttonFontSize={theme.typography.caption.fontSize}
              onClick={closeModal}
              variant="outlined"
              style={{
                borderRadius: '6px',
                border: `1px solid ${getCardStyle(selectedProject.status, theme).buttonBgColor}`,
                fontWeight: 'bold',
                height: '32px',
                width: '100px',

                cursor: 'pointer',
                color: getCardStyle(selectedProject.status, theme)
                  .buttonBgColor,
              }}
            />
            <Button
              title={modalConfig.buttons[1]}
              buttonFontSize={theme.typography.caption.fontSize}
              onClick={() => alert(`${modalConfig.buttons[1]} clicked`)}
              variant="contained"
              style={{
                borderRadius: '6px',
                backgroundColor: getCardStyle(selectedProject.status, theme)
                  .buttonBgColor,
                fontWeight: 'bold',
                height: '32px',
                width: '100px',
                cursor: 'pointer',
                color: 'white',
              }}
            />
          </Box>
        </Modal>
      )}
    </CardContainer>
  );
};

export default CardGrid;
