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
  height: '600px',
}));

export const StyledInputSection = styled(Box)(() => ({
  display: 'flex',
}));

export const StyledButton = styled(Button)(() => ({
  minWidth: '120px',
}));

/*import { styled } from "@mui/material/styles";
import { Box, ListItem, Typography } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2.5),
}));

export const StyledTodoContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  boxShadow: theme.shadows[1],
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginBottom: theme.spacing(1),
  borderRadius: "4px",
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const CalendarContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const EventsBox = styled(Box)(({ theme }) => ({
  flex: "1 1 20%",
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(2),
  borderRadius: "4px",
  boxShadow: `0 4px 10px ${theme.palette.primary.dark}`,
}));

export const EventsTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

export const FullCalendarContainer = styled(Box)(({ theme }) => ({
  flex: "1 1 100%",
  marginLeft: theme.spacing(2),
}));

export const ToDoActionsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

export const CalendarEventStyles = `
  .fc-list-event:hover {
    background-color: #d3e4f8;
    color: #1a1a1a;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
*/
