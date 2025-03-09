import { styled } from '@mui/system';
import { Box, FormControl, Radio, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: 'auto',
  // padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  color: theme.palette.text.primary,

  backgroundColor: theme.palette.background.paper,
}));

export const FlexRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  color: theme.palette.text.secondary,
}));

export const InputLabelItem = styled('label')(({ theme }) => ({
  fontSize: theme.typography?.body2.fontSize,
  marginBottom: '4px',
  color: theme.palette.grey[700],
}));

export const FullWidthFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.white.main,
  color: theme.palette.text.primary,
  borderColor: theme.palette.primary.main,
}));

interface StyledLabelProps {
  selected: boolean;
}

export const StyledLabel = styled('label')<StyledLabelProps>(
  ({ theme, selected }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 16px',

    border: `3px solid ${
      selected ? theme.palette.primary.main : theme.palette.grey[900]
    }`,
    borderRadius: '8px',
    borderColor: selected
      ? theme.palette.primary.light
      : theme.palette.black[800],
    color: selected ? theme.palette.primary.main : theme.palette.text.secondary,
    fontWeight: selected ? '600' : '400',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginRight: '8px',
    gap: '8px',
    fontSize: '14px',
    marginLeft: '12px',
  })
);

export const StyledRadio = styled(Radio)(() => ({
  display: 'none',
}));

export const ButtonSection = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '20px',
});

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  columnGap: '20px',
  rowGap: '15px',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));
export const CreateProjectHeader = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
}));

export const GridContainerChild = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr',
  columnGap: '20px',
  rowGap: '15px',
  width: '100%',
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  color: theme.palette.error.main,
  fontFamily: 'sans-serif',

  marginLeft: '15px',
}));
