import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { DECOR_LOGO_COLOR } from '../../thems/primitives/colors';

export const StyledPageContent = styled(Box)({
  width: '74%',
  height: 'fit-content',
  marginTop: '25px',
  marginBottom: '0px',
  boxShadow: '0px 0px 10px 1px #ccc',
  borderRadius: '14px',
  overflowY: 'auto',
  border: '1px solid #ccc',
});

export const CreateProjectHeader = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const HeaderIconSec = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})<{ isExpanded: boolean }>(({ isExpanded }) => ({
  background: isExpanded ? '#ffffff' : '#ffffff',
  height: '25px',
  width: '25px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
}));

export const MainBox = styled(Box)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'scroll',
  overflowX: 'hidden',
  backgroundColor: '#F5F5F5',
});

export const StyledAccordion = styled(Accordion, {
  shouldForwardProp: (prop) => prop !== 'completed',
})<{ completed: boolean }>(({ completed }) => ({
  margin: '0 !important',
  borderBottom: completed ? `1px solid ${DECOR_LOGO_COLOR}` : 'none',
}));

export const StyledAccordionSummary = styled(AccordionSummary, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})<{ isExpanded: boolean }>(({ isExpanded }) => ({
  background: isExpanded ? '#FFFFFF' : '#F5F5F5',
  padding: '6px 30px !important',
  transition: 'background 0.3s ease',
}));

export const StyledAccordionDetails = styled(AccordionDetails)({
  padding: '10px 30px !important',
});

export const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})<{ isExpanded: boolean }>(({ isExpanded }) => ({
  fontWeight: '700',
  fontSize: '1.1rem',
  color: isExpanded ? '#000000' : '#717171',
}));
