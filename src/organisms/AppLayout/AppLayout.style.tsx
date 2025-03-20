import { Box, styled } from '@mui/material';

export const StyledAppLayout = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '18rem 1fr',
  gridTemplateRows: 'auto 1fr',
  height: '100% ',
}));

export const Main = styled('main')(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  overflow: 'hidden',
  height: 'inherit',
}));
