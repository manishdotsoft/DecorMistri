import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomTextField = styled(Box)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '6px', // Ensure it's applied
    height: '55px',
  },
});
