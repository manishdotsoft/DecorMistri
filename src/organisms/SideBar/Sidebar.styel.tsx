import palette from '../../thems/primitives/palette';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

export const SidebarSection = styled(Box)(({ theme }) => ({
  width: '230px',
  padding: theme.spacing(2),
  borderRight: `1px solid ${palette.grey[50]}`,
}));

export const ContentSection = styled(Box)(({ theme }) => ({
  marginLeft: '20px',
  flex: 1,
  padding: theme.spacing(1),
}));

export const SelectSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const TitleTypography = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginBottom: theme.spacing(1),
  fontWeight: 600,
}));

export const LinkTypography = styled('button')(({ theme }) => ({
  cursor: 'pointer',
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(1),
  fontWeight: 600,
  fontSize: '18px',
  border: 'none',
  backgroundColor: '#ffff',
  fontFamily: 'sans-serif',
}));

export const LinkBox = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginBottom: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'start',
}));

export const StyledAccordion = styled(Accordion)`
  background-color: #f4f6f9;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #e2e8f0;
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
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

export const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: #ffffff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey.main};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  &:active {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const ExpandIconStyled = styled(ExpandMoreIcon)`
  color: ${({ theme }) => theme.palette.grey[50]};
  transition: transform 0.3s ease;
  &.Mui-expanded {
    transform: rotate(180deg);
  }
`;
