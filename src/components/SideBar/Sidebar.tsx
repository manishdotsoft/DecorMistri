import { Box, ListItem, ListItemText, Collapse, List } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import {
  ImgBox,
  LogoName,
  SidebarContainer,
  SidebarHead,
  SidebarLink,
  CustomListItemText,
} from './Sidebar.styel';

import { useSidebarState } from './SideBarHooks';

const Sidebar = () => {
  const { handleDropdownToggle, isDropdownOpen } = useSidebarState();
  const location = useLocation();

  const isActiveRoute = (route: string) => location.pathname === route;

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

      {/* My Profile Dropdown */}
      <ListItem disablePadding>
        <SidebarLink
          onClick={() => handleDropdownToggle('myProfile')}
          className={isDropdownOpen('myProfile') ? 'active' : ''}
        >
          <CustomListItemText primary="My Profile">
            My Profile
          </CustomListItemText>

          {isDropdownOpen('userManagement') ? <ExpandLess /> : <ExpandMore />}
        </SidebarLink>
      </ListItem>
      <Collapse in={isDropdownOpen('myProfile')} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem disablePadding component={Link} to="/myprofile">
            <SidebarLink
              className={isActiveRoute('/myprofile/info') ? 'active' : ''}
            >
              <ListItemText primary="Profile Information" />
            </SidebarLink>
          </ListItem>
          <ListItem disablePadding component={Link} to="/business">
            <SidebarLink
              className={isActiveRoute('/myprofile/business') ? 'active' : ''}
            >
              <ListItemText primary="Business Details" />
            </SidebarLink>
          </ListItem>
          <ListItem disablePadding component={Link} to="/myprofile/settings">
            <SidebarLink
              className={isActiveRoute('/myprofile/settings') ? 'active' : ''}
            >
              <ListItemText primary="Advanced Settings" />
            </SidebarLink>
          </ListItem>
        </List>
      </Collapse>

      {/* User Management Dropdown */}
      <ListItem disablePadding>
        <SidebarLink
          onClick={() => handleDropdownToggle('userManagement')}
          className={isDropdownOpen('userManagement') ? 'active' : ''}
        >
          <ListItemText primary="User Management" />
          {isDropdownOpen('userManagement') ? <ExpandLess /> : <ExpandMore />}
        </SidebarLink>
      </ListItem>
      <Collapse
        in={isDropdownOpen('userManagement')}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          <ListItem disablePadding component={Link} to="/usermanagement/create">
            <SidebarLink
              className={
                isActiveRoute('/usermanagement/create') ? 'active' : ''
              }
            >
              <ListItemText primary="Create User" />
            </SidebarLink>
          </ListItem>
          <ListItem disablePadding component={Link} to="/usermanagement/manage">
            <SidebarLink
              className={
                isActiveRoute('/usermanagement/manage') ? 'active' : ''
              }
            >
              <ListItemText primary="Manage Users" />
            </SidebarLink>
          </ListItem>
          <ListItem
            disablePadding
            component={Link}
            to="/usermanagement/permissions"
          >
            <SidebarLink
              className={
                isActiveRoute('/usermanagement/permissions') ? 'active' : ''
              }
            >
              <ListItemText primary="User Permissions" />
            </SidebarLink>
          </ListItem>
        </List>
      </Collapse>

      {/* Projects Dropdown */}
      <ListItem disablePadding>
        <SidebarLink
          onClick={() => handleDropdownToggle('projects')}
          className={isDropdownOpen('projects') ? 'active' : ''}
        >
          <ListItemText primary="Projects" />
          {isDropdownOpen('projects') ? <ExpandLess /> : <ExpandMore />}
        </SidebarLink>
      </ListItem>
      <Collapse in={isDropdownOpen('projects')} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem disablePadding component={Link} to="/projects/live">
            <SidebarLink
              className={isActiveRoute('/projects/live') ? 'active' : ''}
            >
              <ListItemText primary="Live Projects" />
            </SidebarLink>
          </ListItem>
          <ListItem disablePadding component={Link} to="/projects/upcoming">
            <SidebarLink
              className={isActiveRoute('/projects/upcoming') ? 'active' : ''}
            >
              <ListItemText primary="Upcoming Projects" />
            </SidebarLink>
          </ListItem>
          <ListItem disablePadding component={Link} to="/projects/completed">
            <SidebarLink
              className={isActiveRoute('/projects/completed') ? 'active' : ''}
            >
              <ListItemText primary="Completed Projects" />
            </SidebarLink>
          </ListItem>
          <ListItem disablePadding component={Link} to="/projects/all">
            <SidebarLink
              className={isActiveRoute('/projects/all') ? 'active' : ''}
            >
              <ListItemText primary="All Projects & Quotes" />
            </SidebarLink>
          </ListItem>
        </List>
      </Collapse>

      {/* Chat and Inbox Dropdown */}
      <ListItem disablePadding>
        <SidebarLink
          onClick={() => handleDropdownToggle('chatInbox')}
          className={isDropdownOpen('chatInbox') ? 'active' : ''}
        >
          <ListItemText primary="Chat and Inbox" />
          {isDropdownOpen('chatInbox') ? <ExpandLess /> : <ExpandMore />}
        </SidebarLink>
      </ListItem>
      <Collapse in={isDropdownOpen('chatInbox')} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem disablePadding component={Link} to="/chat/core">
            <SidebarLink
              className={isActiveRoute('/chat/core') ? 'active' : ''}
            >
              <ListItemText primary="Core Chat Functionality" />
            </SidebarLink>
          </ListItem>
          <ListItem disablePadding component={Link} to="/chat/inbox">
            <SidebarLink
              className={isActiveRoute('/chat/inbox') ? 'active' : ''}
            >
              <ListItemText primary="Inbox Management" />
            </SidebarLink>
          </ListItem>
        </List>
      </Collapse>

      {/* Calendar View */}
      <ListItem disablePadding component={Link} to="/calenderview">
        <SidebarLink className={isActiveRoute('/calenderview') ? 'active' : ''}>
          <ListItemText primary="Calendar View" sx={{ fontWeight: 800 }} />
        </SidebarLink>
      </ListItem>
    </SidebarContainer>
  );
};

export default Sidebar;
