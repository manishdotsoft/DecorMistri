import React from 'react';
import { StyledMenu, StyledMenuItem, StatusButton } from './Menu.style';
import { Collapse, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Modal from '../../../atoms/Modal/Modal';
import palette from '../../../thems/primitives/palette';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useMenuLogic } from './Menu.hook';
import EditProject from '../../../organisms/EditProject/CreateProject';

interface ProjectMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
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
  onDeleteProject,
  currentProject,
  onUpdateStatus,
}) => {
  const {
    statusOptions,
    dropdownOpen,
    modalState,
    toggleDropdown,
    openModal,
    closeModal,
    handleStatusChange,
    confirmDelete,
  } = useMenuLogic({
    onDeleteProject,
    currentProject,
    onUpdateStatus,
    onClose,
  });

  return (
    <StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          {/* Edit Option */}
          {item === 'Edit' && (
            <StyledMenuItem onClick={() => openModal('edit')}>
              Edit
            </StyledMenuItem>
          )}

          {/* Delete Project Option */}
          {item === 'Delete Project' && (
            <StyledMenuItem
              onClick={() => openModal('delete')}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {item}
              <DeleteOutlineIcon />
            </StyledMenuItem>
          )}

          {/* Change Status with Dropdown */}
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

          {/* Render Other Menu Items */}
          {item !== 'Edit' &&
            item !== 'Delete Project' &&
            item !== 'Change Status' && <StyledMenuItem>{item}</StyledMenuItem>}
        </React.Fragment>
      ))}

      {/* Delete Confirmation Modal */}
      <Modal
        open={modalState === 'delete'}
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

      {/* Edit Modal */}
      <Modal
        open={modalState === 'edit'}
        onClose={closeModal}
        children={<EditProject />}
      />
    </StyledMenu>
  );
};

export default ProjectMenu;
