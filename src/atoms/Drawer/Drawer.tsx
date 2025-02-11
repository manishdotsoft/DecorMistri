import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  HeaderProfileIcon,
  ProfileBox,
  UserBox,
  UserAccount,
} from './Drawer.style';

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
  userName: string;
  menuItems: { icon: React.ReactNode; text: string; onClick: () => void }[];
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  open,
  onClose,
  userName,
  menuItems,
}) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: 330, padding: 16, borderRadius: '10px' }}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>

        <UserBox>
          <UserAccount>
            <HeaderProfileIcon>
              <ProfileBox>{userName.charAt(0)}</ProfileBox>
            </HeaderProfileIcon>
            <Typography>{userName}</Typography>
          </UserAccount>
        </UserBox>

        <List>
          {menuItems.map((item, index) => (
            <div key={index}>
              <ListItem disablePadding>
                <ListItemButton onClick={item.onClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
              {index < menuItems.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
