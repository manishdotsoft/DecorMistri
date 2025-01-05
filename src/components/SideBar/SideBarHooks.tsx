import { useState } from 'react';

type DropdownState = {
  [key: string]: boolean;
};

export const useSidebarState = () => {
  const [openDropdown, setOpenDropdown] = useState<DropdownState>({});

  const handleDropdownToggle = (key: string) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isDropdownOpen = (key: string): boolean => openDropdown[key] || false;

  return { openDropdown, handleDropdownToggle, isDropdownOpen };
};
