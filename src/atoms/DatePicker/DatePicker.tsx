import React, { useState } from 'react';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CustomTextField } from './DatePicker.style';
// import { StyledContainer } from './DatePicker.style';

interface DatePickerProps {
  onDateChange?: (date: Date | null) => void;
  style?: React.CSSProperties;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  onDateChange,
  style,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        value={selectedDate}
        onChange={handleDateChange}
        format="MM/dd/yyyy"
        slotProps={{
          textField: {
            variant: 'outlined',
            component: CustomTextField,
          },
        }}
        sx={{ ...style }}
      />
    </LocalizationProvider>
  );
};
