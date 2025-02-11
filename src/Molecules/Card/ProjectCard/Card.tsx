/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProjectMenu from './Menu';

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

interface ProjectCardProps {
  data: any;
  cardStyle?: React.CSSProperties;
}

const CardGrid: React.FC<ProjectCardProps> = ({ data, cardStyle }) => {
  console.log(data, 'data');
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

  return (
    <Box display="flex" gap={2} flexWrap="wrap">
      {data.length > 0 ? (
        data.map((project: any) => (
          <Card
            key={project.id}
            sx={{
              width: 275,
              minHeight: 180,
              position: 'relative',
              overflow: 'visible',
              boxShadow: 3,
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
                color: 'black',
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
                Location: {project.location}
              </Typography>
              <Typography variant="body2">Status: {project.status}</Typography>
              <Typography variant="body2">
                Start Date: {project.startDate}
              </Typography>
              <Typography variant="body2">
                End Date: {project.endDate}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>No projects available.</Typography>
      )}
    </Box>
  );
};

export default CardGrid;
