import React from 'react';
import {
  Box,
  Typography,
  Card,
  IconButton,
  useTheme,
  Avatar,
  Divider,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ProjectMenu from './Menu';
import Button from '../../atoms/Button/Button';
import { ButtonWrapper } from './Card.style';
import { useCardLogic } from './Card.hook';

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

const CardGrid: React.FC<ProjectCardProps> = ({ data, cardStyle }) => {
  const {
    menuState,
    handleMenuClick,
    handleMenuClose,
    handleButtonClick,
    borderColor,
  } = useCardLogic();
  const theme = useTheme();

  const getCardStyle = (status: Project['status']) => {
    switch (status) {
      case 'Live':
        return {
          borderColor: '#1A73E8',
          backgroundColor: '#F1F8FF',
          title: 'Live Project',
        };
      case 'Upcoming':
        return {
          borderColor: '#FFC107',
          backgroundColor: '#FFF7E1',
          title: 'Move to Live',
        };
      case 'NotConfirmed':
        return {
          borderColor: '#FF5722',
          backgroundColor: '#FBE9E7',
          title: 'Update Status',
        };
      case 'Completed':
        return {
          borderColor: '#08c912',
          backgroundColor: '#E8F5E9',
          title: 'Detail View',
        };

      default:
        return {
          borderColor: theme.palette.grey[400],
          backgroundColor: theme.palette.background.default,
          title: '',
        };
    }
  };

  return (
    <Box display="flex" gap={2} flexWrap="wrap">
      {data.length > 0 ? (
        data.map((project) => {
          const projectCardStyle = getCardStyle(project.status);

          return (
            <Box
              key={project.id}
              sx={{
                border: `2px solid ${projectCardStyle.borderColor}`,
                borderTopWidth: '6px',
                borderRadius: '8px',
              }}
            >
              <Card
                sx={{
                  width: '250px',
                  position: 'relative',
                  overflow: 'visible',
                  // padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '8px',
                  ...cardStyle,
                }}
              >
                {/* More Options Button */}
                <Box sx={{ padding: '16px' }}>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      marginTop: '-10px',
                      marginBottom: '10px',
                    }}
                  >
                    {project?.heading}
                  </Typography>
                  <Divider />

                  <IconButton
                    aria-label="more"
                    onClick={(event) => handleMenuClick(event, project)}
                    sx={{
                      position: 'absolute',
                      top: -3,
                      right: -3,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    <MoreHorizIcon
                      sx={{ color: projectCardStyle.borderColor }}
                    />
                  </IconButton>
                </Box>

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
                <Box width="100%">
                  {[
                    { label: 'Name', value: project.name },
                    { label: 'Design Type', value: project.designType },
                    { label: 'Location', value: project.location },
                    { label: 'Size', value: '1300 sq.ft.' },
                    {
                      label: 'Completion',
                      value: (
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '5px',
                          }}
                        >
                          <Box
                            sx={{
                              height: '5px',
                              width: '80%',
                              bgcolor: '#eee',
                              borderRadius: 1,
                            }}
                          >
                            <Box
                              sx={{
                                width: `${project.completionPercentage}%`,
                                height: '100%',
                                bgcolor: projectCardStyle.borderColor,
                                borderRadius: 1,
                              }}
                            />
                          </Box>
                          <span style={{ color: projectCardStyle.borderColor }}>
                            {project.completionPercentage}%
                          </span>
                        </Box>
                      ),
                    },
                    {
                      label: 'Date',
                      value: `${project.startDate} TO ${project.endDate}`,
                    },
                  ].map(({ label, value }, index, array) => (
                    <Box key={label} width="100%">
                      <Typography
                        variant="body2"
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '10px 0',
                          borderBottom:
                            index < array.length - 1
                              ? `1px solid ${theme.palette.divider}`
                              : 'none',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '14px',
                            fontWeight: 'normal',
                            flex: '0 0 40%',
                          }}
                        >
                          {label}
                        </span>
                        <span
                          style={{
                            fontSize: '14px',
                            fontWeight: 'bold',
                            flex: '0 0 60%',
                          }}
                        >
                          {value}
                        </span>
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Divider />

                {/* Action Button */}
                <ButtonWrapper sx={{ marginTop: '20px' }}>
                  <Avatar
                    src={project.ownerImage || ''}
                    alt="Profile"
                    sx={{
                      width: 40,
                      height: 40,
                      marginRight: '8px',
                    }}
                  />
                  <Button
                    title={projectCardStyle.title}
                    onClick={handleButtonClick}
                    variant="outlined"
                    style={{
                      borderRadius: '6px',
                      border: `1px solid ${projectCardStyle.borderColor}`,
                      color: projectCardStyle.borderColor,
                      fontWeight: 'bold',
                      width: '120px',
                    }}
                  />
                </ButtonWrapper>
              </Card>
            </Box>
          );
        })
      ) : (
        <Typography>No projects available.</Typography>
      )}
    </Box>
  );
};

export default CardGrid;
