import React from "react";
import { Alert,AlertColor, Snackbar, SnackbarOrigin,useTheme } from "@mui/material";
import { ToasterContainer } from "./Toaster.style";

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
  position = { vertical: "top", horizontal: "right" }, 
}) => {
  const theme:any = useTheme();

  const getBackgroundColor = (severity: AlertColor):string => {
    switch (severity) {
      case "success":
        return theme?.palette?.primary?.[500]; 
      case "warning":
        return theme?.palette?.warning?.warning; 
      case "error":
        return theme?.palette?.error?.alert ; 
      case "info":
        return theme?.palette?.rateSheduleColors?.colorc ; 
      default:
        return theme?.palette?.primary?.[500]; 
    }
  };

  const backgroundColor = getBackgroundColor(severity);

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
          sx={{
            width: "100%",
            backgroundColor, 
            color: "#fff", 
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </ToasterContainer>
  );
};

export default Toaster;
