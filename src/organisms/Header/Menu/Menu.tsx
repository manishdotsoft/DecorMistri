import { Menu, MenuItem } from '@mui/material';

interface ProjectMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  onOptionClick: (option: string) => void;
  menuItems: string[];
}

const ProjectMenu = ({
  anchorEl,
  open,
  onClose,
  onOptionClick,
  menuItems,
}: ProjectMenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      PaperProps={{
        style: {
          borderRadius: 8,
          padding: '8px 0',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          minWidth: 150,
          backgroundColor: '#f9f9f9',
        },
      }}
    >
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          onClick={() => onOptionClick(item)}
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#333',
            padding: '10px 16px',
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
        >
          {item}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ProjectMenu;
