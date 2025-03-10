import React from 'react';
import { LinearProgress, SxProps, useTheme } from '@mui/material';
import { ProgressBarr, ProTitle, Update } from './ProgressBar.style';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const theme = useTheme();
  const progressBarStyles: SxProps = {
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.palette.grey[100],
    '& .MuiLinearProgress-bar': {
      backgroundColor: theme.palette.decor.main,
    },
    width: '230px',

    '@media(max-width: 744px)': {
      width: '100%',
    },
  };

  return (
    <ProgressBarr>
      <ProTitle>Your profile {progress}% Completed</ProTitle>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={progressBarStyles}
      />
      <Update>Update your profile</Update>
    </ProgressBarr>
  );
};

export default ProgressBar;
