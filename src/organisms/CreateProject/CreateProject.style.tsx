import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import typeset from '../../thems/primitives/typeset';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

// Title for pages
export const Title = styled('h6')(() => ({
  marginBottom: '30px',
  fontSize: `${typeset.h6.fontSize}px`,
  fontFamily: typeset.fontFamily,
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
  borderRight: '1px solid #ddd',
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
  border: '2px solid #ccc',
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

export const IncompleteStepIcon = styled(RadioButtonUncheckedIcon)(() => ({
  color: '#ccc',
}));

export const MainBox = styled(Box)(() => ({
  height: '98vh',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'scroll',
  overflowX: 'hidden',
}));
