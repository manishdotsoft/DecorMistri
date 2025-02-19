import React from 'react';
import {
  Alert,
  AlertColor,
  Snackbar,
  SnackbarOrigin,
  useTheme,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import {
  ToasterContainer,
  alertStyles,
  AnimatedCheckIcon,
} from './Toaster.style';
import { DECOR_LOGO_COLOR } from '../../thems/primitives/colors';
import palette from '../../thems/primitives/palette';

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
    success: DECOR_LOGO_COLOR,
    warning: palette.warning.warning,
    error: theme.palette.error.main,
    info: theme.palette.info.main,
    projectCreateSuccess: DECOR_LOGO_COLOR,
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
