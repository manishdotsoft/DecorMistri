import React from 'react';
import { LinearProgress } from '@mui/material';
import {
  ProgressBarr,
  ProTitle,
  Update,
  ProgressBarStyles,
} from './ProgressBar.style';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <ProgressBarr>
      <ProTitle>Your profile {progress}% Completed</ProTitle>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={ProgressBarStyles(progress)}
      />
      <Update>Update your profile</Update>
    </ProgressBarr>
  );
};

export default ProgressBar;
