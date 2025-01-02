import React from "react";
import { Alert, AlertColor, Snackbar } from "@mui/material";
import { ToasterContainer } from "./Toaster.style";

export interface ToasterProps {
  message: string;
  type?: AlertColor;
  open: boolean;
  onClose: () => void;
}

const Toaster: React.FC<ToasterProps> = ({
  message,
  type = "info",
  open,
  onClose,
}) => {
  return (
    <ToasterContainer>
      <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
        <Alert onClose={onClose} severity={type} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </ToasterContainer>
  );
};

export default Toaster;
