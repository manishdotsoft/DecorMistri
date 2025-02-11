import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  IconButton,
} from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { DateSelectArg } from '@fullcalendar/interaction';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  StyledContainer,
  StyledTodoContainer,
  StyledListItem,
  CalendarContainer,
  EventsBox,
  EventsTitle,
  FullCalendarContainer,
  ToDoActionsBox,
  CalendarEventStyles,
} from './Calender.style';

type Todo = {
  id: number;
  date: string;
  content: string;
};

const Calender: React.FC = () => {
  const [selectedDate] = useState<Date | null>(new Date());
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [currentEvents, setCurrentEvents] = useState<
    {
      id: string;
      title: string;
      start: string;
      end?: string;
      allDay?: boolean;
    }[]
  >([]);

  const handleAddOrEditTodo = () => {
    if (!input.trim()) return;

    if (editTodoId !== null) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editTodoId ? { ...todo, content: input.trim() } : todo
        )
      );
      setEditTodoId(null);
    } else {
      if (selectedDate) {
        setTodos((prev) => [
          ...prev,
          {
            id: Date.now(),
            date: selectedDate.toISOString(),
            content: input.trim(),
          },
        ]);
      }
    }

    setInput('');
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id: number, content: string) => {
    setEditTodoId(id);
    setInput(content);
  };

  const getFilteredTodos = () => {
    if (!selectedDate) return [];
    const currentDate = selectedDate.toISOString();
    return todos.filter((todo) => todo.date === currentDate);
  };

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: {
    event: { title: string; remove: () => void };
  }) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <style>{CalendarEventStyles}</style>
      <StyledContainer>
        <Typography variant="h4" gutterBottom>
          Calendar
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Full calendar interactive Page with a To-Do List
        </Typography>
        <CalendarContainer>
          <EventsBox>
            <EventsTitle variant="h5">Events</EventsTitle>
            <List>
              {currentEvents.map((event) => (
                <StyledListItem key={event.id}>
                  <Typography>{event.title}</Typography>
                </StyledListItem>
              ))}
            </List>
          </EventsBox>

          <FullCalendarContainer>
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,listMonth',
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) =>
                setCurrentEvents(
                  events.map((event) => ({
                    id: event.id,
                    title: event.title,
                    start: event.start?.toISOString() || '',
                    end: event.end?.toISOString(),
                    allDay: event.allDay,
                  }))
                )
              }
              initialEvents={[
                { id: '1234', title: 'All-day event', date: '2022-09-14' },
                { id: '43215', title: 'Timed event', date: '2022-07-10' },
              ]}
            />
          </FullCalendarContainer>
        </CalendarContainer>

        <StyledTodoContainer>
          <Typography variant="h6">
            To-Do List for {selectedDate?.toLocaleDateString()}
          </Typography>
          <ToDoActionsBox>
            <TextField
              fullWidth
              placeholder="Add a new to-do..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              size="small"
            />
            <Button
              variant="contained"
              onClick={handleAddOrEditTodo}
              color="primary"
              disableElevation
            >
              {editTodoId !== null ? 'Edit' : 'Add'}
            </Button>
          </ToDoActionsBox>
          <List>
            {getFilteredTodos().map((todo) => (
              <StyledListItem key={todo.id}>
                <Typography>{todo.content}</Typography>
                <Box>
                  <IconButton
                    onClick={() => handleEditTodo(todo.id, todo.content)}
                    size="small"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteTodo(todo.id)}
                    color="error"
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </StyledListItem>
            ))}
          </List>
        </StyledTodoContainer>
      </StyledContainer>
    </LocalizationProvider>
  );
};

export default Calender;

// ---------------------------------------------------------
// import React, { useState } from "react";
// import { Box, Typography, TextField, List, IconButton } from "@mui/material";
// import { DateCalendar } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import {
//   StyledContainer,
//   StyledTodoContainer,
//   StyledListItem,
//   StyledDateCalendar,
//   StyledInputSection,
//   StyledButton,
// } from "./Calender.style";

// interface Todo {
//   id: number;
//   date: string;
//   content: string;
// }

// export const Calender: React.FC = () => {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [input, setInput] = useState("");
//   const [editTodoId, setEditTodoId] = useState<number | null>(null);

//   const handleDateChange = (date: Date | null) => {
//     setSelectedDate(date);
//   };

//   const handleAddOrEditTodo = () => {
//     if (!input.trim()) return;

//     if (editTodoId !== null) {
//       setTodos((prev) =>
//         prev.map((todo) =>
//           todo.id === editTodoId ? { ...todo, content: input.trim() } : todo
//         )
//       );
//       setEditTodoId(null);
//     } else {
//       if (selectedDate) {
//         setTodos((prev) => [
//           ...prev,
//           {
//             id: Date.now(),
//             date: selectedDate.toISOString(),
//             content: input.trim(),
//           },
//         ]);
//       }
//     }

//     setInput("");
//   };

//   const handleDeleteTodo = (id: number) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id));
//   };

//   const handleEditTodo = (id: number, content: string) => {
//     setEditTodoId(id);
//     setInput(content);
//   };

//   const getFilteredTodos = () => {
//     if (!selectedDate) return [];
//     const currentDate = selectedDate.toISOString();
//     return todos.filter((todo) => todo.date === currentDate);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <StyledContainer>
//         <Typography variant="h5" gutterBottom>
//           Calendar
//         </Typography>

//         <StyledDateCalendar>
//           <DateCalendar value={selectedDate} onChange={handleDateChange} />
//         </StyledDateCalendar>

//         <StyledTodoContainer>
//           <Typography variant="h6">
//             To-Do List for {selectedDate?.toLocaleDateString()}
//           </Typography>
//           <StyledInputSection>
//             <TextField
//               fullWidth
//               placeholder="Add a new to-do..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               size="small"
//             />
//             <StyledButton
//               variant="contained"
//               onClick={handleAddOrEditTodo}
//               color="primary"
//               disableElevation
//             >
//               {editTodoId !== null ? "Edit" : "Add"}
//             </StyledButton>
//           </StyledInputSection>
//           <List>
//             {getFilteredTodos().map((todo) => (
//               <StyledListItem key={todo.id}>
//                 <Typography>{todo.content}</Typography>
//                 <Box>
//                   <IconButton
//                     onClick={() => handleEditTodo(todo.id, todo.content)}
//                     size="small"
//                   >
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton
//                     onClick={() => handleDeleteTodo(todo.id)}
//                     color="error"
//                     size="small"
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </Box>
//               </StyledListItem>
//             ))}
//           </List>
//         </StyledTodoContainer>
//       </StyledContainer>
//     </LocalizationProvider>
//   );
// };
