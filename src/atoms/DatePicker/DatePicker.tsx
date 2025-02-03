import React, { useState } from 'react';
import { DateCalendar } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StyledContainer, StyledDateCalendar } from './DatePicker.style';

interface DatePickerProps {
  initialDate?: Date | null;
  onDateChange?: (date: Date | null) => void;
  style?: React.CSSProperties;
  calendarStyle?: React.CSSProperties;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  initialDate = new Date(),
  onDateChange,
  style,
  calendarStyle,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledContainer style={style}>
        <StyledDateCalendar style={calendarStyle}>
          <DateCalendar value={selectedDate} onChange={handleDateChange} />
        </StyledDateCalendar>
      </StyledContainer>
    </LocalizationProvider>
  );
};
