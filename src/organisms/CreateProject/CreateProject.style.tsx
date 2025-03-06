import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';

export const StyledPageContent = styled(Box)(({ theme }) => ({
  width: '74%',
  height: 'fit-content',
  marginTop: '25px',
  marginBottom: '0px',
  boxShadow: `0px 0px 10px 1px ${theme.palette.grey[600]}`,
  borderRadius: '14px',
  overflowY: 'auto',
  border: `1px solid ${theme.palette.grey[600]}`,
}));

export const CreateProjectHeader = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const HeaderIconSec = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})<{ isExpanded: boolean }>(({ isExpanded, theme }) => ({
  background: isExpanded
    ? theme.palette.primary.contrastText
    : theme.palette.primary.contrastText,
  height: '25px',
  width: '25px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
}));

export const MainBox = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',

  backgroundColor: theme.palette.grey[150],
}));

export const StyledAccordion = styled(Accordion, {
  shouldForwardProp: (prop) => prop !== 'completed',
})<{ completed: boolean }>(({ completed, theme }) => ({
  margin: '0 !important',
  borderBottom: completed ? `1px solid ${theme.palette.decor.main}` : 'none',
}));

export const StyledAccordionSummary = styled(AccordionSummary, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})<{ isExpanded: boolean }>(({ isExpanded, theme }) => ({
  background: isExpanded
    ? theme.palette.primary.contrastText
    : theme.palette.grey[150],
  padding: '6px 30px !important',
  transition: 'background 0.3s ease',
}));

export const StyledAccordionDetails = styled(AccordionDetails)({
  padding: '10px 30px !important',
});

export const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})<{ isExpanded: boolean }>(({ isExpanded, theme }) => ({
  fontWeight: '700',
  fontSize: '1.1rem',
  color: isExpanded ? theme.palette.black[800] : theme.palette.grey[700],
}));
