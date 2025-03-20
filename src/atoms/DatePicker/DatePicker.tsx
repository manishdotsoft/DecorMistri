import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerIcon from '../../assets/images/createProject/DatePickerIcon.svg';
import TextInput from '../TextInput/TextInput';

interface DatePickerProps {
  onDateChange?: (date: Date | null) => void;
  style?: React.CSSProperties;
  value?: Date | null;
  label?: string;
  placeholder?: string;
  disableFuture?: boolean;
  disablePast?: boolean;
  inputStyle?: React.CSSProperties;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  onDateChange,
  value,
  label,
  placeholder,
  inputStyle,
}) => {
  const [manualInput, setManualInput] = useState<string>(
    value ? value.toLocaleDateString('en-US') : ''
  );

  // ✅ Handle manual input and convert it to Date
  const handleManualInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setManualInput(inputValue);

    const parsedDate = new Date(inputValue);
    if (!isNaN(parsedDate.getTime())) {
      onDateChange?.(parsedDate);
    } else {
      onDateChange?.(null);
    }
  };

  // ✅ Handle date selection from calendar
  const handleDateChange = (date: Date | null) => {
    setManualInput(date ? date.toLocaleDateString('en-US') : '');
    onDateChange?.(date);
  };

  return (
    <ReactDatePicker
      selected={value}
      onChange={handleDateChange}
      dateFormat="MM/dd/yyyy"
      customInput={
        <div style={{ position: 'relative', width: '100%' }}>
          <TextInput
            name={label || 'date-picker'}
            label={label || 'Date'}
            value={manualInput}
            onChange={handleManualInputChange}
            type="date"
            placeholder={placeholder || 'MM/DD/YYYY'}
            style={{
              width: '100%',
              height: '40px',
              paddingRight: '35px',
              borderRadius: '6px',
              ...inputStyle,
            }}
          />
          <img
            src={DatePickerIcon}
            alt="Calendar Icon"
            width={20}
            height={20}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              // pointerEvents: 'none',
            }}
          />
        </div>
      }
    />
  );
};

export default DatePicker;
