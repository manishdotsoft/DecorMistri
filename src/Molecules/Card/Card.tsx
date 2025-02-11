/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProjectMenu from './Menu';
import Button from '../../atoms/Button/Button';
import { ButtonWrapper } from './Card.styel';
import { useCardLogic } from './card.hook';
import { formatDate } from '../../utils/formateDate';

interface ProjectCardProps {
  data: any;
  cardStyle?: React.CSSProperties;
  buttonTitle: string;
}

const CardGrid: React.FC<ProjectCardProps> = ({
  data,
  cardStyle,
  buttonTitle,
}) => {
  const { menuState, handleMenuClick, handleMenuClose, handleButtonClick } =
    useCardLogic();

  return (
    <Box display="flex" gap={2} flexWrap="wrap">
      {data.length > 0 ? (
        data.map((project: any) => (
          <Card
            key={project.id}
            sx={{
              width: 250,
              minHeight: 200,
              position: 'relative',
              overflow: 'visible',
              padding: '16px',
              boxShadow: 3,
              backgroundColor: 'ghostwhite',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              ...cardStyle,
            }}
          >
            <IconButton
              aria-label="more"
              onClick={(event) => handleMenuClick(event, project)}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: '#c7148A',
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <ProjectMenu
              anchorEl={menuState.anchorEl}
              open={Boolean(menuState.anchorEl)}
              onClose={handleMenuClose}
              menuItems={[
                'Edit',
                'Change Status',
                'Add Phase',
                'Add Task',
                'Delete Project',
              ]}
              currentProject={
                menuState.selectedProject?.id
                  ? menuState.selectedProject.id.toString()
                  : null
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
              projectId={menuState.selectedProject?.projectId ?? null}
            />
            <CardContent>
              <Typography variant="h6">{project.designType}</Typography>
              <Typography variant="body2">
                Location: {project?.location}
              </Typography>
              <Typography variant="body2">Status: {project?.status}</Typography>
              <Typography variant="body2">
                Start Date: {formatDate(project?.startDate)}
              </Typography>
              <Typography variant="body2">
                End Date: {formatDate(project?.endDate)}
              </Typography>
            </CardContent>
            <ButtonWrapper>
              <Button
                title={buttonTitle}
                onClick={handleButtonClick}
                variant={'contained'}
                style={{
                  borderRadius: '6px',
                  backgroundColor: '#C7148A',
                  textTransform: 'uppercase',
                }}
              />
            </ButtonWrapper>
          </Card>
        ))
      ) : (
        <Typography>No projects available.</Typography>
      )}
    </Box>
  );
};

export default CardGrid;
