// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   IconButton,
//   useTheme,
// } from '@mui/material';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Button from '../../atoms/Button/Button';
// import { ButtonWrapper } from './Card.style';
// import { formatDate } from '../../utils/formateDate';
// import { useCardLogic } from './Card.hook';

// interface ProjectCardProps {
//   data: any;
//   cardStyle?: React.CSSProperties;
//   buttonTitle: string;
// }

// const CardGrid: React.FC<ProjectCardProps> = ({
//   data,
//   cardStyle,
//   buttonTitle,
// }) => {
//   const { menuState, handleMenuClick, handleMenuClose, handleButtonClick } =
//     useCardLogic();
//   const theme = useTheme();

// interface Project {
//   name: string;
//   id: string;
//   location: string;
//   size: string;
//   completion: number;
//   date: string;
//   ownerImage: string;
// }

// interface ProjectCardProps {
//   title: string;
//   project: Project;
//   status: 'Live' | 'Upcoming' | 'Completed' | 'NotConfirmed';
//   onStatusChange?: () => void;
// }

// const { borderColor, buttonLabel, buttonColor } = getStatusStyles(status);

//   return (
//     <Box display="flex" gap={2} flexWrap="wrap">
//       {data.length > 0 ? (
//         data.map((project: any) => (
//           <Card
//             key={project.id}
//             sx={{
//               width: 250,
//               minHeight: 200,
//               position: 'relative',
//               overflow: 'visible',
//               padding: '16px',
//               boxShadow: 3,
//               backgroundColor: 'ghostwhite',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               ...cardStyle,
//             }}
//           >
//
//             <CardContent>

//               <Typography variant="body2">Name:{project.designType}</Typography>
//               <Typography variant="body2">
//                 designType:{project.designType}
//               </Typography>
//               <Typography variant="body2">
//                 Location: {project?.location}
//               </Typography>
//               <Typography variant="body2">Size:</Typography>
//               <Typography variant="body2">
//                 Completion: {project?.status}
//               </Typography>
//               <Typography variant="body2">
//                 Date:{formatDate(project?.startDate)} to
//                 {formatDate(project?.endDate)}
//               </Typography>
//             </CardContent>
//             <ButtonWrapper>
//               <img src="#" alt="" />
//               <Button
//                 title={buttonTitle}
//                 onClick={handleButtonClick}
//                 variant="outlined"
//                 style={{
//                   borderRadius: 2,
//                   textTransform: 'uppercase',
//                   width: '100%',
//                   fontSize: '12px',
//                 }}
//               />
//             </ButtonWrapper>
//           </Card>
//         ))
//       ) : (
//         <Typography>No projects available.</Typography>
//       )}
//     </Box>
//   );
// };

// export default CardGrid;

////////////////
import React from 'react';
import {
  Card,
  Typography,
  Box,
  Avatar,
  Divider,
  useTheme,
  IconButton,
  Theme,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CompletionBar from './CompletionBar';
import { useCardLogic } from './Card.hook';
import ProjectMenu from './Menu';
import Button from '../../atoms/Button/Button';

interface Project {
  name: string;
  id: string;
  location: string;
  size: string;
  completion: number;
  date: string;
  ownerImage: string;
  projectId?: string;
}

interface ProjectCardProps {
  title: string;
  project: Project;
  status: 'Live' | 'Upcoming' | 'Completed' | 'NotConfirmed';
  onStatusChange?: () => void;
}

// Status Styles Helper Function
const getStatusStyles = (status: string, theme: Theme) => {
  switch (status) {
    case 'Live':
      return {
        borderColor: theme.palette.info.main,
        buttonLabel: 'Live Project',
        buttonColor: 'magenta',
        buttonTextColor: 'black',
      };
    case 'Upcoming':
      return {
        borderColor: 'orange',
        buttonLabel: 'Move to Live',
        buttonColor: 'orange',
        buttonTextColor: 'black',
      };
    case 'Completed':
      return {
        borderColor: 'green',
        buttonLabel: 'Detail View',
        buttonColor: 'green',
        buttonTextColor: 'black',
      };
    case 'NotConfirmed':
      return {
        borderColor: theme.palette.error.main,
        buttonLabel: 'Update Status',
        buttonColor: 'red',
        buttonTextColor: 'black',
      };
    default:
      return {
        borderColor: theme.palette.grey[500],
        buttonLabel: 'Update',
        buttonColor: 'inherit',
        buttonTextColor: 'inherit',
      };
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  project,
  status,
  onStatusChange,
}) => {
  const theme = useTheme();
  const { menuState, handleMenuClick, handleMenuClose } = useCardLogic();
  const { borderColor, buttonLabel, buttonColor } = getStatusStyles(
    status,
    theme
  );

  return (
    <Card
      sx={{
        border: `2px solid ${borderColor}`,
        borderTopWidth: '6px',
        borderRadius: 2,
        width: 270,
        position: 'relative',
      }}
    >
      {/* Title */}
      <Typography
        sx={{ p: '6px', ml: '10px', fontWeight: 'bold' }}
        variant="body1"
      >
        {title}
      </Typography>
      <Divider />

      {/* Project Details */}
      <Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ p: '6px', ml: '10px', fontSize: '14px' }}>
              Name: <strong>{project.name}</strong>
            </Typography>

            {/* More Options Button */}
            <IconButton
              aria-label="more"
              onClick={(event) => handleMenuClick(event, project)}
              sx={{
                position: 'absolute',
                top: -3,
                right: -1,
                color: theme.palette.text.primary,
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Divider />

          <Typography sx={{ p: '6px', ml: '10px', fontSize: '14px' }}>
            Design Type: <strong>xyz</strong>
          </Typography>
          <Divider />

          <Typography sx={{ p: '6px', ml: '10px', fontSize: '14px' }}>
            Location:<strong>{project.location}</strong>
          </Typography>
          <Divider />

          <Typography sx={{ p: '6px', ml: '10px', fontSize: '14px' }}>
            Size: <strong>{project.size} sq.ft.</strong>
          </Typography>
          <Divider />

          <Typography sx={{ p: '6px', ml: '10px', fontSize: '14px' }}>
            Date: <strong>{project.date}</strong>
          </Typography>
          <Divider />
        </Box>

        {/* Completion Bar */}
        <CompletionBar
          completion={project.completion}
          borderColor={borderColor}
        />
        <Divider />

        {/* Owner & Status Button */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ p: '8px' }}
        >
          <Avatar src={project.ownerImage} />
          {onStatusChange && (
            <Button
              title={buttonLabel}
              onClick={onStatusChange}
              variant="outlined"
              style={{
                borderRadius: '6px',
                width: '120px',
                fontSize: '12px',
                color: buttonColor,
                borderColor: buttonColor,
              }}
            />
          )}
        </Box>
      </Box>

      {/* Project Menu (Now inside the return statement) */}
      <ProjectMenu
        borderColor={borderColor}
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
        currentProject={menuState.selectedProject?.id ?? null}
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
    </Card>
  );
};

export default ProjectCard;
