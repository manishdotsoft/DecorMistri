import React from 'react';
import {
  StyledMenu,
  StyledMenuItem,
  StatusButton,
  ButtonContainer,
  MenuHeader,
  StatusContainer,
} from './Menu.style';
import { Box, IconButton, useTheme, Popover } from '@mui/material';
import Modal from '../../atoms/Modal/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { useMenuLogic } from './Menu.hook';
import EditProject from '../../organisms/EditProject/CreateProject';
import Button from '../../atoms/Button/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
  status?: string;
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
  status,
}) => {
  const {
    statusOptions = [],
    modalState,
    openModal,
    closeModal,
    // handleStatusChange,
    statusAnchorEl,
    handleOpenStatusMenu,
    handleCloseStatusMenu,
  } = useMenuLogic({
    onDeleteProject,
    currentProject,
    onUpdateStatus,
    onClose,
  });

  const theme = useTheme();

  return (
    <StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      borderColor={borderColor}
    >
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          {item === 'Edit' && (
            <MenuHeader>
              <StyledMenuItem onClick={() => openModal('edit')}>
                Edit project
              </StyledMenuItem>
              <IconButton size="small" onClick={onClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </MenuHeader>
          )}

          {item === 'Delete Project' && (
            <StyledMenuItem onClick={() => openModal('delete')}>
              Delete Project
            </StyledMenuItem>
          )}

          {item === 'Change Status' && (
            <>
              <StyledMenuItem onClick={handleOpenStatusMenu}>
                Change Status
                <IconButton size="small">
                  <KeyboardArrowRightIcon fontSize="small" />
                </IconButton>
              </StyledMenuItem>

              <Popover
                open={Boolean(statusAnchorEl)}
                anchorEl={statusAnchorEl}
                onClose={handleCloseStatusMenu}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: ['live', 'upcoming', 'completed'].includes(
                    status?.toLowerCase() || ''
                  )
                    ? 'right'
                    : 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: ['live', 'upcoming', 'completed'].includes(
                    status?.toLowerCase() || ''
                  )
                    ? 'left'
                    : 'right',
                }}
              >
                <StatusContainer borderColor={borderColor}>
                  {statusOptions.length > 0 ? (
                    statusOptions.map((status, idx) => (
                      <StatusButton
                        key={idx}
                        variant="outlined"
                        onClick={() => {
                          onUpdateStatus(currentProject ?? '', status);
                          handleCloseStatusMenu();
                        }}
                      >
                        {status}
                      </StatusButton>
                    ))
                  ) : (
                    <p>No status options available</p>
                  )}
                </StatusContainer>
              </Popover>
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
          <ButtonContainer>
            <Button
              title="Cancel"
              variant="contained"
              onClick={closeModal}
              style={{
                width: '100%',
                borderRadius: '6px',
                padding: '10px 40px',
                background: theme.palette.grey[800],
                color: theme.palette.black[200],
              }}
            />
            <Button
              title="Delete"
              variant="contained"
              onClick={() => {
                if (currentProject) {
                  onDeleteProject(currentProject);
                }
                closeModal();
              }}
              style={{
                width: '100%',
                borderRadius: '6px',
                padding: '10px 40px',
                background: theme.palette.error.light,
              }}
            />
          </ButtonContainer>
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
