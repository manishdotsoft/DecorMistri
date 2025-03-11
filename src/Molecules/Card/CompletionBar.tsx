import React from 'react';
import { Box, Typography } from '@mui/material';

interface CompletionBarProps {
  completion: number;
  borderColor: string;
}

const CompletionBar: React.FC<CompletionBarProps> = ({
  completion,
  borderColor,
}) => {
  return (
    <Box display="flex" alignItems="center" sx={{ my: '15px' }}>
      <Typography sx={{ fontSize: '14px', mr: 1 }}>Completion:</Typography>
      <Box sx={{ flex: 1, height: '6px', bgcolor: '#eee', borderRadius: 1 }}>
        <Box
          sx={{
            width: `${completion}%`,
            height: '100%',
            bgcolor: borderColor,
            borderRadius: 1,
          }}
        />
      </Box>
      <Typography sx={{ ml: 1, color: borderColor, fontSize: '14px' }}>
        {completion}%
      </Typography>
    </Box>
  );
};

export default CompletionBar;
