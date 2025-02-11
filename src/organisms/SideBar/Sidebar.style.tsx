import { styled } from '@mui/system';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import palette from '../../thems/primitives/palette';
import typeset from '../../thems/primitives/typeset';

export const SidebarContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
});

export const SidebarSection = styled(Box)({
  width: '250px',
  padding: '15px',
  boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.1)',
  transition: 'width 0.3s ease',
  // '&:hover': {
  //   width: '280px',
  // },
});

export const ContentSection = styled(Box)({
  flex: 1,
  padding: '20px',
  width: 'calc(100vw - 250px)',
  overflow: 'hidden',
  overflowX: 'auto',
});

export const TitleTypography = styled(Typography)({
  marginBottom: '15px',
  fontWeight: 700,
  fontSize: typeset.h6.fontSize,
  color: palette.primary.dark,
  textAlign: 'center',
  textTransform: 'uppercase',
});

export const LinkBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'start',
});

export const LinkTypography = styled('button')({
  cursor: 'pointer',
  fontSize: typeset.body1.fontSize,
  fontWeight: 600,
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px',
  width: '100%',
  borderRadius: '8px',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  backgroundColor: 'transparent',
  color: palette.text.secondary,
  '&:hover': {
    backgroundColor: palette.decor.main,
    color: palette.white.main,
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
});

export const StyledAccordion = styled(Accordion)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: palette.grey[100],
  },
});

export const StyledAccordionSummary = styled(AccordionSummary)({
  color: palette.text.secondary,

  fontWeight: 600,
  padding: '0 ',
  margin: '0',
  '& .MuiAccordionSummary-content': {
    display: 'flex',
    alignItems: 'center',
    borderTop: 'none',
  },
});

export const StyledAccordionDetails = styled(AccordionDetails)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  paddingLeft: '20px',
});

export const StyledTypography = styled('div')({
  color: palette.text.secondary,
  fontSize: '1rem',
  fontWeight: 600,
  cursor: 'pointer',
  marginBottom: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '5px',

  transition: 'color 0.3s ease, transform 0.2s ease',
  '&:hover': {
    color: palette.text.secondary,
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
});

export const ExpandIconStyled = styled(ExpandMoreIcon)({
  color: palette.grey[500],
  transition: 'transform 0.3s ease',
  '&.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
});

export const ToggleDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  padding: '10px',
  justifyContent: 'space-between',
});
export const IconsDiv = styled('div')({ display: 'flex', gap: '10px' });

export const AccordionBox = styled('div')({
  display: 'flex',
  gap: '5px',
  fontSize: '16px',
});
