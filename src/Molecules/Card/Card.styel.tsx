import { Box, styled, Typography } from '@mui/material';
import { theme } from './../../thems/primitives/theme';
import typeset from '../../thems/primitives/typeset';
import palette from '../../thems/primitives/palette';

interface SuccessStatusProps {
  isStarted: boolean;
}

export const Button = styled('button')({
  height: '20px',
  width: '20px',
});

export const CardContainer = styled('div')({
  marginBottom: '30px',
  boxShadow: `0 0 10px 1px ${theme.palette.grey[400]}`,
  // boxShadow: `0 0 12px 1px ${theme.palette.grey[300]}`,
  minWidth: '280px',
  background: palette.primary.cardLight,
});

export const HeadingTitle = styled(Typography)({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: typeset.h6.fontSize,
  fontWeight: 'bold',
  color: theme.palette.text.primary,
});

export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
});

export const TiteleStatus = styled(Typography)({
  marginTop: '25px',
  marginBottom: '5px',
  color: theme.palette.error.main,
  fontSize: typeset.body1.fontSize,
});

export const SuccessStatus = styled(Typography)<SuccessStatusProps>(
  ({ theme, isStarted }) => ({
    marginTop: '5px',
    marginBottom: '5px',
    color: isStarted ? theme.palette.primary.main : theme.palette.error.main,
    fontSize: typeset.body2.fontSize,
  })
);
