import palette, { COMMON_DEFAULT } from '../../thems/primitives/palette';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { theme } from '../../thems/primitives/theme';
import typeset from '../../thems/primitives/typeset';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

export const SidebarContainer = styled(Box)({
  display: 'flex',
  width: '100%',
});

export const SidebarSection = styled(Box)(() => ({
  width: '230px',
  padding: '10px',
  borderRight: `1px solid ${palette.grey[50]}`,
}));

export const ContentSection = styled(Box)(() => ({
  marginLeft: '20px',
  flex: 1,
  padding: '10px',
}));

export const SelectSection = styled(Box)(() => ({
  marginBottom: '10px',
}));

export const TitleTypography = styled(Typography)(() => ({
  marginLeft: '10px',
  marginBottom: '10px',
  fontWeight: 600,
}));

export const LinkTypography = styled('button')(() => ({
  cursor: 'pointer',
  marginBottom: '8px',
  marginTop: '8px',
  fontWeight: 600,
  fontSize: typeset.body1.fontSize,
  border: 'none',
  backgroundColor: palette.white.main,
  fontFamily: 'sans-serif',
}));

export const LinkBox = styled(Box)(() => ({
  marginLeft: '8px',
  marginBottom: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'start',
}));

export const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: theme.palette.grey[100],
  margin: '10px 0',
  borderRadius: theme.shape.borderRadius,
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  backgroundColor: theme.palette.primary.main,
  color: COMMON_DEFAULT,
  borderRadius: '8px',
  fontWeight: 600,
  padding: '0 16px',
  height: '65px',
  '& .MuiAccordionSummary-content': {
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(() => ({
  backgroundColor: theme.palette.background.paper,
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}));

export const StyledTypography = styled(Typography)(() => ({
  color: theme.palette.grey[900],
  fontSize: typeset.body1.fontSize,
  fontWeight: 500,
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&:active': {
    color: theme.palette.primary.main,
  },
}));

export const ExpandIconStyled = styled(ExpandMoreIcon)(() => ({
  color: theme.palette.grey[50],
  transition: 'transform 0.3s ease',
  '&.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
}));
