import { Box, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  ImgBox,
  LogoName,
  SidebarContainer,
  SidebarHead,
  SidebarLink,
} from './Sidebar.styel';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHead>
        <ImgBox>
          <img src="" alt="drcor-mistri-logo" />
        </ImgBox>
        <Box>
          <LogoName variant="h5">DecorMistri</LogoName>
        </Box>
      </SidebarHead>

      <ListItem disablePadding component={Link} to="/myprofile">
        <SidebarLink>
          <ListItemText primary="My Profile" />
        </SidebarLink>
      </ListItem>
      <ListItem disablePadding component={Link} to="/usermanagement">
        <SidebarLink>
          <ListItemText primary="User Management" />
        </SidebarLink>
      </ListItem>
      <ListItem disablePadding component={Link} to="/projects">
        <SidebarLink>
          <ListItemText primary="Projects" />
        </SidebarLink>
      </ListItem>
      <ListItem disablePadding component={Link} to="/calenderview">
        <SidebarLink>
          <ListItemText primary="Calendar-View" />
        </SidebarLink>
      </ListItem>
      <ListItem disablePadding component={Link} to="/chatinbox">
        <SidebarLink>
          <ListItemText primary="Chat Inbox" />
        </SidebarLink>
      </ListItem>
      <ListItem disablePadding component={Link} to="/createmanager">
        <SidebarLink>
          <ListItemText primary="Create Manager" />
        </SidebarLink>
      </ListItem>
    </SidebarContainer>
  );
};

export default Sidebar;
