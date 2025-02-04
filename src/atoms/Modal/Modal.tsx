import React from 'react';
import { IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ModalBox, ModalTitle, ModalButtons } from './Modal.styles';
import palette from '../../thems/primitives/palette';

interface ButtonConfig {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

interface ReusableModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  buttons?: ButtonConfig[];
  showCloseIcon?: boolean;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  open,
  onClose,
  title,
  buttons = [],
  showCloseIcon = true,
}) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <ModalBox>
        {showCloseIcon && (
          <IconButton
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '0px',
              right: '0px',
              color: palette.grey[400],
            }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        )}
        <ModalTitle id="modal-title">{title}</ModalTitle>
        <ModalButtons>
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              style={{
                ...button.style,
                padding: '12px 16px',
                margin: '0 8px',
                border: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              {button.label}
            </button>
          ))}
        </ModalButtons>
      </ModalBox>
    </Modal>
  );
};

export default ReusableModal;
