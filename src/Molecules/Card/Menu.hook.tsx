import { useState } from 'react';

interface ProjectMenuLogicProps {
  onDeleteProject: (projectValue: string) => void;
  currentProject: string | null;
  onUpdateStatus: (projectValue: string, newStatus: string) => void;
  onClose: () => void;
}

export const useMenuLogic = ({
  onDeleteProject,
  currentProject,
  onUpdateStatus,
  onClose,
}: ProjectMenuLogicProps) => {
  const statusOptions = ['Live', 'Complete', 'Upcoming', 'Not confirmed'];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalState, setModalState] = useState<'edit' | 'delete' | null>(null);
  const [statusAnchorEl, setStatusAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleOpenStatusMenu = (event: React.MouseEvent<HTMLElement>) => {
    setStatusAnchorEl(event.currentTarget);
  };

  const handleCloseStatusMenu = () => {
    setStatusAnchorEl(null);
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const openModal = (type: 'edit' | 'delete') => setModalState(type);
  const closeModal = () => setModalState(null);

  const confirmDelete = () => {
    if (currentProject) {
      onDeleteProject(currentProject);
    }
    closeModal();
    onClose();
  };

  const handleStatusChange = (status: string) => {
    if (currentProject) {
      onUpdateStatus(currentProject, status);
    }
    setDropdownOpen(false);
    onClose();
  };

  return {
    statusOptions,
    dropdownOpen,
    modalState,
    toggleDropdown,
    openModal,
    closeModal,
    handleStatusChange,
    confirmDelete,
    statusAnchorEl,
    handleOpenStatusMenu,
    handleCloseStatusMenu,
  };
};
