import React, { useState } from 'react';
import { StyledMenu, StyledMenuItem, StatusButton } from './Menu.style';
import { Collapse, Box } from '@mui/material';
import ReusableModal from '../../../atoms/Modal/Modal';

interface ProjectMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  onOptionClick: (option: string) => void;
  menuItems: string[];
  showDropdown: boolean;
  onDeleteProject: (projectValue: string) => void;
  currentProject: string | null;
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
}) => {
  const statusOptions = ['Live', 'Complete', 'Upcoming', 'Not confirmed'];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true); // Show modal when "Delete Project" is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const confirmDelete = () => {
    if (currentProject) {
      onDeleteProject(currentProject); // Call parent function to delete project
    }
    closeModal(); // Close modal after deletion
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
              <Box sx={{ padding: 2, backgroundColor: '#f9f9f9' }}>
                {statusOptions.map((status, idx) => (
                  <StatusButton
                    key={idx}
                    variant="outlined"
                    onClick={() => console.log(`Status changed to: ${status}`)}
                  >
                    {status}
                  </StatusButton>
                ))}
              </Box>
            </Collapse>
          )}
        </React.Fragment>
      ))}

      {/* Delete Confirmation Modal */}
      <ReusableModal
        open={isModalOpen}
        onClose={closeModal}
        title="Are you sure you want to delete this project?"
        buttons={[
          {
            label: 'Cancel',
            onClick: closeModal,
            style: { backgroundColor: '#f5f5f5', color: '#333' },
          },
          {
            label: 'Delete',
            onClick: confirmDelete,
            style: { backgroundColor: '#d32f2f', color: '#fff' },
          },
        ]}
      />
    </StyledMenu>
  );
};

export default ProjectMenu;
