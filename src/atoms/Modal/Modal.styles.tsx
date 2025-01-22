import { styled, Box, Typography } from '@mui/material';

export const ModalBox = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '40px 20px 40px 20px',
  textAlign: 'center',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  fontFamily: 'sans-serif',
}));

export const ModalTitle = styled(Typography)(() => ({
  color: '#1e1e1e',
  fontWeight: 700,
  fontSize: '20px',
  marginBottom: '20px',
  fontFamily: 'sans-serif',
}));

export const ModalButtons = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
  fontFamily: 'sans-serif',
}));
