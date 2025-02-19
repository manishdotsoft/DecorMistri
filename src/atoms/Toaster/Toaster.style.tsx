import { styled, keyframes } from '@mui/material/styles';
import { Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Snackbar Slide & Bounce Animation

export const ToasterContainer = styled(Box)(() => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
}));

// Background Styling with Gradient
export const alertStyles = (backgroundColor: string) => ({
  width: '100%',
  background: backgroundColor,
  color: '#fff',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
  '.MuiAlert-icon': {
    animation: `${pulseTick} 1.5s infinite ease-in-out`,
    color: '#ff1e00',
  },
});

// Success Tick Animation
const pulseTick = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

export const AnimatedCheckIcon = styled(CheckCircleIcon)(() => ({
  animation: `${pulseTick} 1.5s infinite ease-in-out`,
  color: 'white',
}));
