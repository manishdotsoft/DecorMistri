import { useState, ChangeEvent } from 'react';

const useHeaderFilterHooks = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isStartDatePickerOpen, setIsStartDatePickerOpen] = useState(false);
  const [isEndDatePickerOpen, setIsEndDatePickerOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleStartDatePicker = () => setIsStartDatePickerOpen((prev) => !prev);
  const toggleEndDatePicker = () => setIsEndDatePickerOpen((prev) => !prev);
  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

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
    toggleDrawer,
    drawerOpen,
  };
};

export default useHeaderFilterHooks;
