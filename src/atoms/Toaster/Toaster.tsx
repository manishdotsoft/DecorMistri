import React from 'react';
import {
  Alert,
  AlertColor,
  Snackbar,
  SnackbarOrigin,
  useTheme,
  Theme,
} from '@mui/material';

import {
  ToasterContainer,
  alertStyles,
  AnimatedCheckIcon,
} from './Toaster.style';

type CustomAlertColor = AlertColor | 'projectCreateSuccess';

export interface ToasterProps {
  message: string;
  severity: CustomAlertColor;
  open: boolean;
  onClose: () => void;
  position?: SnackbarOrigin;
  style?: React.CSSProperties;
}

const Toaster: React.FC<ToasterProps> = ({
  message,
  severity,
  open,
  onClose,
  position = { vertical: 'top', horizontal: 'right' },
  style,
}) => {
  const theme: Theme = useTheme();

  const backgroundColors: Record<CustomAlertColor, string> = {
    success: theme.palette.decor.main,
    warning: theme.palette.warning.warning,
    error: theme.palette.error.main,
    info: theme.palette.info.main,
    projectCreateSuccess: theme.palette.decor.main,
  };

  return (
    <ToasterContainer style={style}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={position}
      >
        <Alert
          onClose={onClose}
          severity={
            severity !== 'projectCreateSuccess'
              ? (severity as AlertColor)
              : 'success'
          }
          iconMapping={{
            success: <AnimatedCheckIcon />,
          }}
          sx={alertStyles(backgroundColors[severity])}
        >
          {message}
        </Alert>
      </Snackbar>
    </ToasterContainer>
  );
};

export default Toaster;
