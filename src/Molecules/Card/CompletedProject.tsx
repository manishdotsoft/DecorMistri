import {
  CardContent,
  Typography,
  LinearProgress,
  Box,
  IconButton,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '../../atoms/Button/Button';
import { CardContainer, HeadingTitle } from './Card.styel';
import { useProjectMenu } from './card.hook';
import ProjectMenu from './Menu';

const projectData = [
  {
    value: 'Complete Project 1',
    designType: 'Residential',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 75,
  },
  {
    value: 'Complete Project 2',
    designType: 'Residential',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 75,
  },
  {
    value: 'Complete Project 3',
    designType: 'Residential',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 75,
  },
  {
    value: 'Complete Project 4',
    designType: 'Residential',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 75,
  },
];

const CompleteProjectCard: React.FC = () => {
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
            <LinearProgress
              variant="determinate"
              value={project.completionPercentage}
              sx={{ marginTop: 2 }}
            />
            <Typography
              variant="body2"
              sx={{ textAlign: 'center', marginTop: 1 }}
            >
              {project.completionPercentage}% Completed
            </Typography>
          </CardContent>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Button
              title="Detail View"
              color="primary"
              variant="contained"
              style={{
                width: '180px',
                borderRadius: '4px',
              }}
              onClick={() => console.log('Detail View clicked')}
            />
          </Box>
        </CardContainer>
      ))}

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

export default CompleteProjectCard;
