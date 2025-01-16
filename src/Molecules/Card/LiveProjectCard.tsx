import {
  CardContent,
  Typography,
  LinearProgress,
  IconButton,
} from '@mui/material';
import Button from '../../atoms/Button/Button';
import {
  ButtonBox,
  CardContainer,
  HeadingTitle,
  SuccessStatus,
} from './Card.styel';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useProjectMenu } from './card.hook';
import ProjectMenu from './ThreeDotMenu/Menu';

interface Project {
  value: string;
  designType: string;
  location: string;
  startDate: string;
  endDate: string;
  completionPercentage: number;
}

const projectData: Project[] = [
  {
    value: 'Live Project 1',
    designType: 'Residential',
    location: 'India',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    completionPercentage: 25,
  },
  {
    value: 'Live Project 2',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-02-01',
    endDate: '2025-11-30',
    completionPercentage: 50,
  },
  {
    value: 'Live Project 3',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-02-01',
    endDate: '2025-11-30',
    completionPercentage: 50,
  },
  {
    value: 'Live Project 4',
    designType: 'Commercial',
    location: 'India',
    startDate: '2025-02-01',
    endDate: '2025-11-30',
    completionPercentage: 50,
  },
];

const LiveProjectCard = () => {
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
            <SuccessStatus>
              {project.completionPercentage}% Completed
            </SuccessStatus>
          </CardContent>
          <ButtonBox>
            <Button
              title="Open Project"
              color="secondary"
              style={{
                width: '180px',
                borderRadius: '4px',
              }}
              variant="contained"
              onClick={() => console.log('Button clicked')}
            />
          </ButtonBox>
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

export default LiveProjectCard;
