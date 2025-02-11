import { styled } from '@mui/material/styles';
import { Box, ListItem, Button } from '@mui/material';
import palette from '../../thems/primitives/palette';

export const StyledContainer = styled(Box)(() => ({
  maxWidth: '800px',
  margin: 'auto',
}));

export const StyledTodoContainer = styled(Box)(({ theme }) => ({
  marginTop: '1rem',
  padding: '20px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  boxShadow: theme.shadows[1],
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '4px',
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledDateCalendar = styled(Box)(() => ({
  border: `1px solid ${palette.grey[100]}`,
  borderRadius: '8px',
  width: '100%',
  maxWidth: '800px',
}));

export const StyledInputSection = styled(Box)(() => ({
  display: 'flex',
}));

export const StyledButton = styled(Button)(() => ({
  minWidth: '120px',
}));
