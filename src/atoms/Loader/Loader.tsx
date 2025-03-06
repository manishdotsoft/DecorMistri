/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { CircularProgress, useTheme } from '@mui/material';
import { LoaderContainer, LoaderText } from './Loader.style';

export interface LoaderProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({
  message = 'Loading...',
  size = 'medium',
  style,
}) => {
  const theme: any = useTheme();
  const sizeMap = {
    small: 20,
    medium: 40,
    large: 60,
  };

  return (
    <LoaderContainer style={{ ...style }}>
      <CircularProgress
        size={sizeMap[size]}
        sx={{ color: theme?.palette?.decor?.dark }}
      />
      {message && <LoaderText variant="body1">{message}</LoaderText>}
    </LoaderContainer>
  );
};

export default Loader;
