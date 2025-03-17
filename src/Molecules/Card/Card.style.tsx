import {
  Avatar,
  Box,
  Card,
  IconButton,
  styled,
  Typography,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface SuccessStatusProps {
  isStarted: boolean;
}

// export const Button = styled('button')({
//   height: '20px',
//   width: '20px',
// });

export const HeadingTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: theme.typography.h6.fontSize,
  fontWeight: 'bold',
  color: theme?.palette?.text?.primary,
  backgroundSize: '300% 100%',
  padding: '5px 10px',
  marginBottom: '10px',
  borderRadius: '6px',
  width: '100%',
  boxSizing: 'border-box',
}));
export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
});

export const TiteleStatus = styled(Typography)(({ theme }) => ({
  marginTop: '25px',
  marginBottom: '5px',
  color: theme.palette.error.main,
  fontSize: theme.typography.body1.fontSize,
}));

export const SuccessStatus = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isStarted',
})<SuccessStatusProps>(({ theme, isStarted }) => ({
  marginTop: '5px',
  marginBottom: '5px',
  color: isStarted ? theme.palette.primary.main : theme.palette.error.main,
  fontSize: theme.typography.body2.fontSize,
}));
///////////
export const ButtonWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px',
});

// export const ProjectCard = styled(Card)<{ borderColor?: string }>(
//   ({ theme, borderColor }) => ({
//     width: '100%',
//     minWidth: '260px',
//     position: 'relative',
//     overflow: 'visible',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     borderRadius: '8px',
//     border: `2px solid ${borderColor}`,
//     borderTopWidth: '6px',

//     [theme.breakpoints.up('xl')]: {
//       minWidth: '280px',
//     },
//   })
// );

export const ProjectCard = styled(Card)(({ theme }) => ({
  width: '100%',
  minWidth: '260px',
  position: 'relative',
  overflow: 'visible',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '8px',
  borderTopWidth: '6px',

  [theme.breakpoints.up('xl')]: {
    minWidth: '280px',
  },
}));

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2.3),
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));

export const CardHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const MoreButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: -3,
  right: -3,
  color: theme.palette.text.secondary,
}));

export const CompletionBarContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '5px',
}));

export const CompletionBar = styled(Box)(({ theme }) => ({
  height: '5px',
  width: '80%',
  backgroundColor: theme.palette?.grey.offwhite,
  borderRadius: ' 6px',
}));

// export const CompletionBarFill = styled(Box)<{
//   fillColor?: string;
//   completionPercentage?: number;
// }>(({ fillColor, completionPercentage }) => ({
//   height: '100%',
//   width: `${completionPercentage}%`,
//   backgroundColor: fillColor,
//   transition: 'width 0.3s ease-in-out',
//   borderRadius: '6px',
// }));
export const CompletionBarFill = styled(Box)({
  height: '100%',
  transition: 'width 0.3s ease-in-out',
  borderRadius: '6px',
});

export const CompletionPercentage = styled('span')<{ color?: string }>(
  ({ theme, color }) => ({
    color: color || theme.palette.text.primary,
    fontWeight: 500,
    fontSize: theme.typography.subtitle2.fontSize,
  })
);
export const CardDetailWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 12px',
  borderBottom: `1px solid ${theme.palette.divider}`,
  fontFamily: theme.typography.fontFamily,
}));

export const LabelText = styled('span')(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  fontWeight: 'normal',
  flex: '0 0 40%',
}));

export const ValueText = styled('span')(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  fontWeight: 'bold',
  flex: '0 0 60%',
}));

export const StyledAvatar = styled(Avatar)(() => ({
  width: 40,
  height: 40,
  marginRight: '8px',
}));
export const SizeBox = styled('span')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 400,
}));

export const StyledMoreIcon = styled(MoreHorizIcon)<{ color?: string }>(
  ({ color }) => ({
    color: color,
    cursor: 'pointer',
  })
);
