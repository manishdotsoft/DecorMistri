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
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {menuItems.map((item, index) => (
        <MenuItem key={index} onClick={() => onOptionClick(item)}>
          {item}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ProjectMenu;
