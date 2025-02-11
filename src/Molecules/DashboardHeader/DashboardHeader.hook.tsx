import { useState, ChangeEvent } from 'react';

const useHeaderFilterHooks = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isStartDatePickerOpen, setIsStartDatePickerOpen] = useState(false);
  const [isEndDatePickerOpen, setIsEndDatePickerOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const toggleStartDatePicker = () => setIsStartDatePickerOpen((prev) => !prev);
  const toggleEndDatePicker = () => setIsEndDatePickerOpen((prev) => !prev);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    setIsStartDatePickerOpen(false);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    setIsEndDatePickerOpen(false);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return {
    searchValue,
    setSearchValue,
    handleSearchChange,
    isStartDatePickerOpen,
    isEndDatePickerOpen,
    handleEndDateChange,
    toggleEndDatePicker,
    handleStartDateChange,
    toggleStartDatePicker,
    startDate,
    endDate,
  };
};

export default useHeaderFilterHooks;
