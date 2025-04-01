import { Box, styled } from '@mui/material';

// export const HeadingItem = styled(Typography)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontWeight: 'bold',
//   color: theme.palette.common.white,

//   borderRadius: theme.shape.borderRadius,
//   padding: '8px 12px',
//   textTransform: 'uppercase',
// }));

// export const BoxItem = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   width: '240px',
//   gap: '16px',
//   padding: '16px',
//   backgroundColor: theme.palette.background.paper,
//   borderRadius: theme.shape.borderRadius,
// }));

// export const Divider = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.grey[300],
//   height: '2px',
// }));
// export const DividerColumn = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.grey[300],
//   height: 'auto',
//   width: '2px',
//   margin: '20px 0',
//   marginBottom: '40px',
// }));

// export const Titel = styled(Typography)(({ theme }) => ({
//   textAlign: 'center',
//   marginBottom: '25px',
//   fontWeight: 'bold',
//   fontSize: '1.8rem',
//   color: theme.palette.text.primary,
// }));

// export const Cards = styled(Box)({
//   marginBottom: '20px',
// });

// export const LoaderWrapper = styled(Box)({
//   height: '80vh',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// });

// export const ProjectHeading = styled(Typography)({
//   fontWeight: '600 !important',
//   fontSize: '18px',
//   textTransform: 'uppercase',
//   textAlign: 'center',
// });

export const CardContaier = styled(Box)(() => ({
  flex: '1 1 calc(25% - 16px)',
  minWidth: '250px',
}));

export const ProjectBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px',
  marginTop: '15px',
}));

export const BoxContainer = styled(Box)(({ theme }) => ({
  gap: '16px',
  padding: '22px',
  backgroundColor: theme.palette.grey[200],

  height: 'calc(100vh - 170px)',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.grey[300],
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.decor?.main || theme.palette.primary.main,
  },
}));
export const LoadingWrapper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '90vh',
  width: '70vw',
}));
