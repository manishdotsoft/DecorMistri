import React from "react";
import { CircularProgress } from "@mui/material";
import { LoaderContainer, LoaderText } from "./Loader.style";

export interface LoaderProps {
  message?: string;
  size?: "small" | "medium" | "large";
}

const Loader: React.FC<LoaderProps> = ({
  message = "Loading...",
  size = "medium",
}) => {
  const sizeMap = {
    small: 20,
    medium: 40,
    large: 60,
  };

  return (
    <LoaderContainer>
      <CircularProgress size={sizeMap[size]} />
      {message && <LoaderText variant="body1">{message}</LoaderText>}
    </LoaderContainer>
  );
};

export default Loader;
