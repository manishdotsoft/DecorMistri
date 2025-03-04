import React from 'react';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DatePickerIcon from '../../assets/images/createProject/DatePickerIcon.svg';

import { Theme, useTheme } from '@mui/material';

interface DatePickerProps {
  onDateChange?: (date: Date | null) => void;
  style?: React.CSSProperties;
  value?: Date | null;
  label?: string;
  placeholder?: string;
  disableFuture?: boolean;
  disablePast?: boolean;
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  onDateChange,
  value,
}) => {
  const handleDateChange = (date: Date | null) => {
    if (onDateChange) {
      onDateChange(date);
    }
  };
  const theme: Theme = useTheme();
  return (
    // <CustomTextField style={{ ...style }}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        value={value}
        onChange={handleDateChange}
        format="MM/dd/yyyy"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '6px',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.grey?.border,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.decor?.main,
              borderWidth: '2px',
            },
            height: '55px',
          },
        }}
        slots={{
          openPickerIcon: () => (
            <img
              src={DatePickerIcon}
              alt="Calendar Icon"
              width={20}
              height={20}
            />
          ),
        }}
      />
    </LocalizationProvider>
    // </CustomTextField>
  );
};
