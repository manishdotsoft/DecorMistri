import { styled, Box, Typography } from '@mui/material';

export const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  padding: '40px 20px',
  textAlign: 'center',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ModalTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary || '#1e1e1e',
  fontWeight: 700,
  fontSize: theme.typography.h6?.fontSize || '20px',
  marginBottom: '20px',

  width: '300px',
}));

export const ModalButtons = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
}));

export const ModalChildWrapper = styled(Box)({
  height: 'auto',
  maxHeight: '70vh',
  overflowY: 'auto',
  scrollbarWidth: 'none',
});
