import React from 'react';
import { LinearProgress, SxProps } from '@mui/material';
import { ProgressBarr, ProTitle, Update } from './ProgressBar.style';
import { DECOR_LOGO_COLOR } from '../../thems/primitives/colors';
import palette from '../../thems/primitives/palette';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const progressBarStyles: SxProps = {
    height: 10,
    borderRadius: 5,
    backgroundColor: palette.grey[100],
    '& .MuiLinearProgress-bar': {
      backgroundColor: DECOR_LOGO_COLOR,
    },
    width: '230px',
    margin: '5px 0',
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
