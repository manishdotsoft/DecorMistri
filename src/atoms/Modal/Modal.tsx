import React from 'react';
import { IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ModalBox, ModalChildWrapper } from './Modal.styles';
import palette from '../../thems/primitives/palette';

interface ButtonConfig {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

interface ReusableModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  buttons?: ButtonConfig[];
  showCloseIcon?: boolean;
  children?: React.ReactNode;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  open,
  onClose,
  showCloseIcon = true,
  children,
}) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <ModalBox>
        {showCloseIcon && (
          <IconButton
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: palette.grey[400],
            }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        )}
        <ModalChildWrapper>
          <div>{children}</div>
        </ModalChildWrapper>
      </ModalBox>
    </Modal>
  );
};

export default ReusableModal;
