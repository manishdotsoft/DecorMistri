// src/components/Modal/ModalStyles.tsx
import { styled } from '@mui/system';
import { Box, IconButton } from '@mui/material';

export const ModalContainer = styled(Box)`
  width: 80%;
  height: 50%;
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 16,
}));

export const ModalContent = styled(Box)(() => ({
  marginBottom: 16,
}));

export const CloseButton = styled(IconButton)(() => ({
  cursor: 'pointer',
}));
