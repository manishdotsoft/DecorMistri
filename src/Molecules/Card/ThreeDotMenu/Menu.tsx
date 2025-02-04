import React, { useState } from 'react';
import { StyledMenu, StyledMenuItem, StatusButton } from './Menu.style';
import { Collapse, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReusableModal from '../../../atoms/Modal/Modal';
import palette from '../../../thems/primitives/palette';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../../store/reducers/projectDataSlice';

interface ProjectMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  onOptionClick: (option: string) => void;
  menuItems: string[];
  onDeleteProject: (projectValue: string) => void;
  currentProject: string | null;
  onUpdateStatus: (projectValue: string, newStatus: string) => void;
}

const ProjectMenu: React.FC<ProjectMenuProps> = ({
  anchorEl,
  open,
  onClose,
  menuItems,

  currentProject,
  onUpdateStatus,
}) => {
  const statusOptions = ['Live', 'Complete', 'Upcoming', 'Not confirmed'];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    if (currentProject) {
      dispatch(deleteProject(currentProject));
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
          {item !== 'Change Status' && item !== 'Delete Project' && (
            <StyledMenuItem>{item}</StyledMenuItem>
          )}

          {item === 'Delete Project' && (
            <>
              <StyledMenuItem
                onClick={handleDeleteClick}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {item}
                <DeleteOutlineIcon />
              </StyledMenuItem>
            </>
          )}

          {/* Change Status Item with Dropdown */}

          {item === 'Change Status' && (
            <>
              <StyledMenuItem
                onClick={toggleDropdown}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {item}
                <KeyboardArrowDownIcon
                  sx={{
                    marginLeft: 1,
                    transition: 'transform 0.3s ease',
                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </StyledMenuItem>
              <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
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
            </>
          )}
        </React.Fragment>
      ))}

      {/* Delete Confirmation Modal */}
      <ReusableModal
        open={isModalOpen}
        onClose={closeModal}
        title="Are you sure you want to  delete this project?"
        buttons={[
          {
            label: 'Cancel',
            onClick: closeModal,
            style: {
              backgroundColor: palette.grey[400],
              color: palette.black[800],
              borderRadius: '6px',
              width: '100%',
            },
          },
          {
            label: 'Delete',
            onClick: confirmDelete,
            style: {
              backgroundColor: palette.error.alert,
              color: palette.white.main,
              borderRadius: '6px',
              width: '100%',
            },
          },
        ]}
      />
    </StyledMenu>
  );
};

export default ProjectMenu;
