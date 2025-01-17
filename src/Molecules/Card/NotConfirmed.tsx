import { CardContent, Typography, IconButton } from '@mui/material';
import Button from '../../atoms/Button/Button';
import {
  CardContainer,
  HeadingTitle,
  ButtonBox,
  TiteleStatus,
} from './Card.styel';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useProjectMenu } from './card.hook';
import ProjectMenu from './ThreeDotMenu/Menu';

const projectData = [
  {
    value: 'Not Confirmed',
    designType: 'Mixed-Use',
    location: 'India',
    startDate: 'TBD',
    endDate: 'TBD',
    completionPercentage: 100,
  },
  {
    value: 'Not Confirmed',
    designType: 'Mixed-Use',
    location: 'India',
    startDate: 'TBD',
    endDate: 'TBD',
    completionPercentage: 100,
  },
  {
    value: 'Not Confirmed',
    designType: 'Mixed-Use',
    location: 'India',
    startDate: 'TBD',
    endDate: 'TBD',
    completionPercentage: 100,
  },
  {
    value: 'Not Confirmed',
    designType: 'Mixed-Use',
    location: 'India',
    startDate: 'TBD',
    endDate: 'TBD',
    completionPercentage: 100,
  },
];

const NotConfirmedCard = () => {
  const { anchorEl, handleMenuOpen, handleMenuClose, handleOptionClick } =
    useProjectMenu();

  const menuItems = [
    'Edit',
    'Change Status',
    'Add Phase',
    'Add Task',
    'Delete Project',
  ];

  return (
    <>
      {projectData.map((project, index) => (
        <CardContainer key={index}>
          <CardContent>
            <HeadingTitle variant="h6">
              {project.value}
              <IconButton
                sx={{ cursor: 'pointer' }}
                onClick={(e) => handleMenuOpen(e, project.value)}
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
            <TiteleStatus>Status: Not Confirmed</TiteleStatus>
          </CardContent>
          <ButtonBox>
            <Button
              title="Update Status"
              color="secondary"
              variant="contained"
              style={{
                width: '180px',
                borderRadius: '4px',
              }}
              onClick={() => console.log('Update Status button clicked')}
            />
          </ButtonBox>
        </CardContainer>
      ))}

      {/* Use the reusable ProjectMenu component */}
      <ProjectMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onOptionClick={handleOptionClick}
        menuItems={menuItems}
      />
    </>
  );
};

export default NotConfirmedCard;
