import { useState, ChangeEvent } from 'react';

const useHeaderFilterHooks = () => {
  const [searchValue, setSearchValue] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return {
    searchValue,
    setSearchValue,
    handleSearchChange,

    toggleDrawer,
    drawerOpen,
  };
};

export default useHeaderFilterHooks;
