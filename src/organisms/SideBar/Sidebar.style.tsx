import { styled } from '@mui/system';
import {
  Box,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import palette from '../../thems/primitives/palette';
import typeset from '../../thems/primitives/typeset';
import fonts from '../../thems/primitives/fonts';

export const SidebarContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
});

export const SidebarSection = styled(Box)({
  width: '300px',
  padding: '15px',
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
  transition: 'width 0.3s ease',
  height: '100vh',
});

export const ContentSection = styled(Box)({
  flex: 1,
  overflowY: 'scroll',

  maxHeight: '100vh',
});

export const TitleTypography = styled(Typography)({
  marginBottom: '15px',
  fontWeight: 700,
  fontSize: typeset.h6.fontSize,
  color: palette.primary.dark,
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: fonts.primary,
});

export const LinkBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignItems: 'start',
  marginBottom: '12px',
});

export const LinkTypography = styled('div')({
  cursor: 'pointer',
  fontSize: typeset.body2.fontSize,
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  fontFamily: fonts.primary,
  gap: '10px',
  padding: '10px',
  width: '100%',
  borderRadius: '8px',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  backgroundColor: 'transparent',
  color: palette.text.secondary,
});

export const StyledAccordionSummary = styled(AccordionSummary)({
  color: palette.text.secondary,

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
  fontSize: typeset.caption.fontSize,
  cursor: 'pointer',
  marginBottom: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',
  margin: '18px 0px ',
  padding: '4px',
  marginLeft: '32px',
  fontFamily: fonts.primary,
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
  fontFamily: fonts.primary,
  gap: '10px',
  cursor: 'pointer',
  padding: '10px',
  justifyContent: 'space-between',
});
export const IconsDiv = styled('div')({
  display: 'flex',
  gap: '10px',
  fontFamily: fonts.primary,
  fontSize: typeset.body2.fontSize,
});

export const AccordionBox = styled('div')({
  display: 'flex',
  gap: '8px',
  fontSize: typeset.body2.fontSize,
  fontFamily: fonts.primary,
});

export const AccordionContainer = styled('div')({ marginBottom: '12px' });

export const ContantBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  fontFamily: fonts.primary,
});
