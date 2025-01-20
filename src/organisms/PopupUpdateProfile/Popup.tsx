import React, { ReactNode } from 'react';
import { Modal, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
  CloseButton,
} from '../../atoms/Modal/Modal.styles';

interface ReusableModalProps {
  open: boolean;
  title?: string;
  content?: ReactNode;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  open,
  title,
  content,
  onClose,
  onConfirm,
  onCancel,
  confirmLabel = 'Yes',
  cancelLabel = 'No',
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContainer>
        <ModalHeader>
          {title && <Typography variant="h6">{title}</Typography>}
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </ModalHeader>
        <ModalContent>{content}</ModalContent>
        <ModalFooter>
          <Button variant="contained" color="primary" onClick={onConfirm}>
            {confirmLabel}
          </Button>
          <Button variant="outlined" color="secondary" onClick={onCancel}>
            {cancelLabel}
          </Button>
        </ModalFooter>
      </ModalContainer>
    </Modal>
  );
};

export default ReusableModal;
