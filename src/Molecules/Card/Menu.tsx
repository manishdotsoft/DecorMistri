import React from 'react';
import { StyledMenu, StyledMenuItem, StatusButton } from './Menu.style';
import { Collapse, Box, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Modal from '../../atoms/Modal/Modal';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';
import { useMenuLogic } from './Menu.hook';
import EditProject from '../../organisms/EditProject/CreateProject';
import Button from '../../atoms/Button/Button';

interface ProjectMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  menuItems: string[];
  onDeleteProject: (projectValue: string) => void;
  currentProject: string | null;
  onUpdateStatus: (projectValue: string, newStatus: string) => void;
  projectId?: number | null;
  borderColor?: string;
}

const ProjectMenu: React.FC<ProjectMenuProps> = ({
  anchorEl,
  open,
  onClose,
  menuItems,
  onDeleteProject,
  currentProject,
  onUpdateStatus,
  projectId,
  borderColor,
}) => {
  const {
    statusOptions,
    dropdownOpen,
    modalState,
    toggleDropdown,
    openModal,
    closeModal,
    handleStatusChange,
  } = useMenuLogic({
    onDeleteProject,
    currentProject,
    onUpdateStatus,
    onClose,
  });
  console.log(borderColor);

  return (
    <StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{
        '& .MuiPaper-root': {
          border: `2px solid ${borderColor}`,
        },
      }}
    >
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          {item === 'Edit' && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: '8px',
              }}
            >
              <StyledMenuItem onClick={() => openModal('edit')}>
                Edit project
              </StyledMenuItem>
              {/* Close Icon to close the entire menu */}
              <IconButton size="small" onClick={onClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          )}

          {item === 'Delete Project' && (
            <StyledMenuItem onClick={() => openModal('delete')}>
              Delete Project <DeleteOutlineIcon />
            </StyledMenuItem>
          )}

          {item === 'Change Status' && (
            <>
              <StyledMenuItem onClick={toggleDropdown}>
                Change Status <KeyboardArrowDownIcon />
              </StyledMenuItem>
              <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
                <Box sx={{ padding: 2 }}>
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

          {item === 'Add Phase' && <StyledMenuItem>Add Phase</StyledMenuItem>}
          {item === 'Add Task' && <StyledMenuItem>Add Task</StyledMenuItem>}
        </React.Fragment>
      ))}

      {/* Delete Project Modal */}
      <Modal
        open={modalState === 'delete'}
        onClose={closeModal}
        title="Are you sure you want to delete this project?"
      >
        <Box>
          <h3>Are you sure you want to delete this project?</h3>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            '
            <Button
              title="Cancel"
              variant="contained"
              onClick={() => {}}
              style={{
                width: '100%',
                borderRadius: '6px',
                padding: '10px 40px',
                background: 'grey',
              }}
            />
            <Button
              title="Delete"
              variant="contained"
              onClick={() => {}}
              style={{
                width: '100%',
                borderRadius: '6px',
                padding: '10px 40px',
                background: 'red',
              }}
            />
          </Box>
        </Box>
      </Modal>

      {/* Edit Project Modal */}
      <Modal open={modalState === 'edit'} onClose={closeModal}>
        {projectId ? (
          <EditProject projectId={projectId} />
        ) : (
          <p>No project selected</p>
        )}
      </Modal>
    </StyledMenu>
  );
};

export default ProjectMenu;
