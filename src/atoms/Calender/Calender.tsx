import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  StyledContainer,
  StyledTodoContainer,
  StyledListItem,
} from "./Calender.style";
import { theme } from "../../thems/primitives/theme";

type Todo = {
  id: number;
  date: string;
  content: string;
};

const Calender: React.FC = () => {
  // const theme = useTheme();
  const colors = theme; // Fixed tokens usage

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [currentEvents, setCurrentEvents] = useState<any[]>([]); // Event state

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

    setInput("");
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

  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: any) => {
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
      <StyledContainer sx={{ m: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Calendar
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Full calendar interactive Page with a To-Do List
        </Typography>
        <style>
          {`
            .fc-list-event:hover {
              background-color: #d3e4f8;
              color: #1a1a1a;
              transition: background-color 0.3s ease, color 0.3s ease;
            }
          `}
        </style>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            flex="1 1 20%"
            sx={{
              backgroundColor: colors.palette.primary.main,
              padding: "15px",
              borderRadius: "4px",
              boxShadow: `0 4px 10px ${colors.palette.primary.dark}`,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: colors.palette.primary.contrastText }}
            >
              Events
            </Typography>
            <List>
              {currentEvents.map((event) => (
                <StyledListItem key={event.id}>
                  <Typography>{event.title}</Typography>
                </StyledListItem>
              ))}
            </List>
          </Box>

          <Box flex="1 1 100%" ml={"15px"}>
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today", // Keeps the prev, next, and today buttons
                center: "title", // Keeps the title in the center
                right: "dayGridMonth,listMonth", // Adds both Month and List views
              }}
              initialView="dayGridMonth" // Starts with the Month view
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                { id: "1234", title: "All-day event", date: "2022-09-14" },
                { id: "43215", title: "Timed event", date: "2022-07-10" },
              ]}
            />
          </Box>
        </Box>

        <StyledTodoContainer>
          <Typography variant="h6">
            To-Do List for {selectedDate?.toLocaleDateString()}
          </Typography>
          <Box display="flex" gap={2} mt={2}>
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
              {editTodoId !== null ? "Edit" : "Add"}
            </Button>
          </Box>
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

/*
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  IconButton,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  StyledContainer,
  StyledTodoContainer,
  StyledListItem,
} from "./Calender.style";

interface Todo {
  id: number;
  date: string;
  content: string;
}

export const Calender: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [editTodoId, setEditTodoId] = useState<number | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

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

    setInput("");
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

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledContainer>
        <Typography variant="h5" gutterBottom>
          Calendar
        </Typography>

        <DateCalendar
          value={selectedDate}
          onChange={handleDateChange}
          sx={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            mt: 2,
            width: "100%",
            maxWidth: "800px", // Add maximum width for better responsiveness
            height: "600px", // Increase height for a larger calendar
          }}
        />

        <StyledTodoContainer>
          <Typography variant="h6">
            To-Do List for {selectedDate?.toLocaleDateString()}
          </Typography>
          <Box display="flex" gap={2} mt={2}>
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
              {editTodoId !== null ? "Edit" : "Add"}
            </Button>
          </Box>
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

*/
