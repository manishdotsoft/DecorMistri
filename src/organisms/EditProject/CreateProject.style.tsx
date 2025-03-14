import { Box, Typography, styled } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

// Title for pages
export const Title = styled('h6')(({ theme }) => ({
  marginBottom: '30px',
  fontSize: `${theme.typography?.h6.fontSize}px`,

  fontWeight: 400,
  lineHeight: 1.5,
}));

// Styled Title2
export const Title2 = styled(Typography)(() => ({
  marginBottom: '16px',
  fontWeight: 'bold',
}));

// Sidebar styling
export const StyledSidebar = styled(Box)(({ theme }) => ({
  width: '300px',
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid  ${theme.palette.white.light}`,
  padding: '16px',
  boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
}));

// Page content styling
export const StyledPageContent = styled(Box)(({ theme }) => ({
  width: '80%',
  padding: '24px',
  backgroundColor: theme.palette.background.paper,
}));

// Stepper icon styles
export const StepIconContainer = styled(Box)(({ theme }) => ({
  width: 24,
  height: 24,
  borderRadius: '50%',
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: ` 2px solid ${theme.palette.grey[600]}`,
}));

export const StepNumber = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const ActiveStepNumber = styled(Typography)(() => ({
  color: 'white',
}));

export const CompletedStepIcon = styled(CheckCircleIcon)(() => ({
  color: 'green',
}));

export const IncompleteStepIcon = styled(RadioButtonUncheckedIcon)(
  ({ theme }) => ({
    color: theme.palette.grey[600],
  })
);

export const MainBox = styled(Box)(() => ({
  display: 'flex',
  height: '100vh',
}));
