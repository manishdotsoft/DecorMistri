import { styled, Box, Typography } from '@mui/material';
import { theme } from '../../thems/primitives/theme';
import typeset from '../../thems/primitives/typeset';
import fonts from '../../thems/primitives/fonts';

export const ModalBox = styled(Box)(() => ({
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

export const ModalTitle = styled(Typography)(() => ({
  color: theme.palette.text.primary || '#1e1e1e',
  fontWeight: 700,
  fontSize: typeset.h6?.fontSize || '20px',
  marginBottom: '20px',
  fontFamily: fonts.primary,
  width: '300px',
}));

export const ModalButtons = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',

  marginTop: '20px',
}));
