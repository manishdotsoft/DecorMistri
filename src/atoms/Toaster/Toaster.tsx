import React from 'react';
import {
  Alert,
  AlertColor,
  Snackbar,
  SnackbarOrigin,
  useTheme,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { ToasterContainer, alertStyles } from './Toaster.style';

export interface ToasterProps {
  message: string;
  severity: AlertColor;
  open: boolean;
  onClose: () => void;
  position?: SnackbarOrigin;
}

const Toaster: React.FC<ToasterProps> = ({
  message,
  severity,
  open,
  onClose,
  position = { vertical: 'top', horizontal: 'right' },
}) => {
  const theme: Theme = useTheme();

  const getBackgroundColor = (severity: AlertColor): string => {
    switch (severity) {
      case 'success':
        return theme.palette.primary.main;
      case 'warning':
        return theme.palette.warning.main;
      case 'error':
        return theme.palette.error.main;
      case 'info':
        return theme.palette.info.main;
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <ToasterContainer>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={position}
      >
        <Alert
          onClose={onClose}
          severity={severity}
          sx={alertStyles(getBackgroundColor(severity))}
        >
          {message}
        </Alert>
      </Snackbar>
    </ToasterContainer>
  );
};

export default Toaster;
