import { Box } from '@mui/material';
import styled from 'styled-components';

export const StyledAppLayout = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '18rem 1fr',
  gridTemplateRows: 'auto 1fr',
  height: '91vh',
}));

export const Main = styled('main')(() => ({
  backgroundColor: '#ffffff',
  //   padding: "4rem 4.8rem 6.4rem",
}));
