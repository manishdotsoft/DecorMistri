import React, { useState, useRef, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import TextField from '@mui/material/TextField';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import { Dayjs } from 'dayjs';
import { SxProps } from '@mui/system';
import dayjs from 'dayjs';

interface DateRangePickerProps {
  // label?: string;
  onDateChange?: (dates: { start: Dayjs | null; end: Dayjs | null }) => void;
  style?: React.CSSProperties;
  sx?: SxProps;
  popperSX?: SxProps;
  dateCalendarSX?: SxProps;
  datePickerIcon?: string;
  datePickerIconStyle?: React.CSSProperties;
}

const MultiDatePicker: React.FC<DateRangePickerProps> = ({
  // label = 'Select Date Range',
  onDateChange,
  style,
  sx,
  popperSX,
  dateCalendarSX,
  datePickerIcon,
  datePickerIconStyle,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [dates, setDates] = useState<{
    start: Dayjs | null;
    end: Dayjs | null;
  }>({
    start: dayjs(),
    end: dayjs(),
  });

  const popperRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    // setAnchorEl(anchorEl ? null : event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateSelect = (newDate: Dayjs) => {
    if (!dates.start) {
      setDates({ start: newDate, end: null });
    } else if (!dates.end) {
      setDates((prev) => ({
        start: newDate.isAfter(prev.start!) ? prev.start : newDate,
        end: newDate.isAfter(prev.start!) ? newDate : prev.start,
      }));
      // setAnchorEl(null);
      handleClose();
    } else {
      setDates({ start: newDate, end: null });
    }

    if (onDateChange) {
      onDateChange({ start: dates.start, end: dates.end });
    }
  };

  // Close popper when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popperRef.current &&
        !popperRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        handleClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorEl]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box style={style}>
        <TextField
          label=""
          value={
            dates.start && dates.end
              ? `${dates.start.format('MMM DD, YYYY')} - ${dates.end.format('MMM DD, YYYY')}`
              : ''
          }
          onClick={handleOpen}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={sx}
        />
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          placement="bottom-start"
          sx={popperSX}
        >
          <Box ref={popperRef}>
            <DateCalendar
              value={dates.end || dates.start}
              onChange={handleDateSelect}
              sx={dateCalendarSX}
            />
          </Box>
        </Popper>
        <img
          src={datePickerIcon}
          alt=""
          style={datePickerIconStyle}
          onClick={handleOpen}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default MultiDatePicker;
