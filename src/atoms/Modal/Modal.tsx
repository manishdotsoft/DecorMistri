import React, { ReactNode } from 'react';
import { Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  CloseButton,
} from './Modal.styles';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  actions?: {
    label: string;
    onClick: () => void;
    color?: 'primary' | 'secondary';
  }[];
}

const CustomModal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContainer>
        {/* Modal Header */}
        <ModalHeader>
          {title && <Typography variant="h6">{title}</Typography>}
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </ModalHeader>

        {/* Modal Content */}
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default CustomModal;
