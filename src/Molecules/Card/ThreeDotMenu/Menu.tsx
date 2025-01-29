// src/components/ProjectMenu.tsx
import React, { useState } from 'react';
import { StyledMenu, StyledMenuItem, StatusButton } from './Menu.style';
import { Collapse, Box } from '@mui/material';
import ReusableModal from '../../../atoms/Modal/Modal';
import palette from '../../../thems/primitives/palette';

interface ProjectMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  onOptionClick: (option: string) => void;
  menuItems: string[];
  showDropdown: boolean;
  onDeleteProject: (projectValue: string) => void;
  currentProject: string | null;
  onUpdateStatus: (projectValue: string, newStatus: string) => void;
}

const ProjectMenu: React.FC<ProjectMenuProps> = ({
  anchorEl,
  open,
  onClose,
  onOptionClick,
  menuItems,
  showDropdown,
  onDeleteProject,
  currentProject,
  onUpdateStatus,
}) => {
  const statusOptions = ['Live', 'Complete', 'Upcoming', 'Not confirmed'];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    onClose();
  };

  return (
    <StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <StyledMenuItem
            onClick={() =>
              item === 'Delete Project'
                ? handleDeleteClick()
                : onOptionClick(item)
            }
          >
            {item}
          </StyledMenuItem>
          {item === 'Change Status' && showDropdown && (
            <Collapse in={showDropdown} timeout="auto" unmountOnExit>
              <Box sx={{ padding: 2, backgroundColor: palette.white[300] }}>
                {statusOptions.map((status, idx) => (
                  <StatusButton
                    key={idx}
                    variant="outlined"
                    onClick={() => handleStatusChange(status)}
                  >
                    {status}
                  </StatusButton>
                ))}
              </Box>
            </Collapse>
          )}
        </React.Fragment>
      ))}
      <ReusableModal
        open={isModalOpen}
        onClose={closeModal}
        title="Are you sure you want to delete this project?"
        buttons={[
          {
            label: 'Cancel',
            onClick: closeModal,
            style: {
              backgroundColor: palette.grey[400],
              color: palette.black[800],
              borderRadius: '6px',
            },
          },
          {
            label: 'Delete',
            onClick: confirmDelete,
            style: {
              backgroundColor: palette.error.alert,
              color: palette.white.main,
              borderRadius: '6px',
            },
          },
        ]}
      />
    </StyledMenu>
  );
};

export default ProjectMenu;
