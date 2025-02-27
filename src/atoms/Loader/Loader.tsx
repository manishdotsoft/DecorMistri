import React from 'react';
import { CircularProgress } from '@mui/material';
import { LoaderContainer, LoaderText } from './Loader.style';

export interface LoaderProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  createProjectLoader?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({
  message = 'Loading...',
  size = 'medium',
  style,
  createProjectLoader,
}) => {
  const sizeMap = {
    small: 20,
    medium: 40,
    large: 60,
  };

  return (
    <LoaderContainer style={{ ...style }}>
      <CircularProgress
        size={sizeMap[size]}
        style={{ ...createProjectLoader }}
      />
      {message && <LoaderText variant="body1">{message}</LoaderText>}
    </LoaderContainer>
  );
};

export default Loader;
